'use client'

import { useEffect } from 'react'

// Google Analytics gtag type declaration
declare global {
  function gtag(...args: any[]): void
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Performance API type declarations
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
  processingEnd: number
  target?: EventTarget
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
  lastInputTime: number
  sources?: Array<{
    node?: Node
    currentRect?: DOMRectReadOnly
    previousRect?: DOMRectReadOnly
  }>
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log Core Web Vitals
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
          // Send to analytics service
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(entry.startTime),
            })
          }
        }

        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming
          console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime)
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(firstInputEntry.processingStart - firstInputEntry.startTime),
            })
          }
        }

        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShift
          if (!layoutShiftEntry.hadRecentInput) {
            console.log('CLS:', layoutShiftEntry.value)
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(layoutShiftEntry.value * 1000) / 1000,
              })
            }
          }
        }
      }
    })

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Navigation timing
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (navigation) {
            const metrics = {
              dns: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp: navigation.connectEnd - navigation.connectStart,
              ttfb: navigation.responseStart - navigation.requestStart,
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              loadComplete: navigation.loadEventEnd - navigation.fetchStart,
            }

            console.log('Performance Metrics:', metrics)

            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.loadComplete),
                custom_parameters: {
                  dns: Math.round(metrics.dns),
                  tcp: Math.round(metrics.tcp),
                  ttfb: Math.round(metrics.ttfb),
                  domContentLoaded: Math.round(metrics.domContentLoaded),
                },
              })
            }
          }
        }, 0)
      })
    }

    // Resource timing
    let resourceObserver: PerformanceObserver | undefined
    if ('performance' in window) {
      resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming
          if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'script') {
            console.log(`${resourceEntry.initiatorType} load time:`, resourceEntry.duration)
          }
        }
      })

      resourceObserver.observe({ entryTypes: ['resource'] })
    }

    // Error tracking
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', event.error)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false,
        })
      }
    })

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: 'Unhandled Promise Rejection',
          fatal: false,
        })
      }
    })

    return () => {
      observer.disconnect()
      resourceObserver?.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
