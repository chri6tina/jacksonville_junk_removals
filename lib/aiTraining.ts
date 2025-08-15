// AI Training and Learning System for Smart Chat Bot

export interface TrainingData {
  input: string
  intent: string
  entities: string[]
  response: string
  userSatisfaction: number
  timestamp: Date
  context: string[]
}

export interface IntentPattern {
  pattern: string
  confidence: number
  responses: string[]
  entities: string[]
  context: string[]
}

export interface ServiceKnowledge {
  service: string
  pricing: {
    base: number
    variables: string[]
    discounts: string[]
  }
  availability: {
    standard: string[]
    urgent: string[]
    weekend: string[]
  }
  requirements: string[]
  process: string[]
  faqs: Array<{
    question: string
    answer: string
    keywords: string[]
  }>
}

export class AITrainingSystem {
  private trainingData: TrainingData[] = []
  private intentPatterns: IntentPattern[] = []
  private serviceKnowledge: Map<string, ServiceKnowledge> = new Map()
  private userSatisfaction: Map<string, number> = new Map()
  private conversationHistory: Map<string, string[]> = new Map()

  constructor() {
    this.initializeServiceKnowledge()
    this.initializeIntentPatterns()
  }

  // Initialize service knowledge base
  private initializeServiceKnowledge() {
    this.serviceKnowledge.set('mattress-removal', {
      service: 'Mattress Removal',
      pricing: {
        base: 50,
        variables: ['size', 'quantity', 'location', 'accessibility'],
        discounts: ['multiple-mattresses', 'bulk-removal', 'repeat-customer']
      },
      availability: {
        standard: ['8 AM - 5 PM', 'Monday - Friday'],
        urgent: ['Same-day service', '2-4 hour response'],
        weekend: ['Saturday appointments', 'Premium pricing']
      },
      requirements: ['Clear access path', 'Remove bedding', 'Identify mattress size'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal'],
      faqs: [
        {
          question: 'How much does mattress removal cost?',
          answer: 'Our mattress removal service starts at $50 per mattress, with volume discounts available.',
          keywords: ['cost', 'price', 'mattress', 'removal']
        },
        {
          question: 'Do you offer same-day mattress removal?',
          answer: 'Yes! We offer same-day mattress removal with 2-4 hour response time for urgent situations.',
          keywords: ['same-day', 'urgent', 'quick', 'emergency']
        },
        {
          question: 'What happens to the old mattress?',
          answer: 'We ensure eco-friendly disposal and recycling whenever possible, following all environmental regulations.',
          keywords: ['disposal', 'recycling', 'eco-friendly', 'environment']
        }
      ]
    })

    this.serviceKnowledge.set('furniture-removal', {
      service: 'Furniture Removal',
      pricing: {
        base: 100,
        variables: ['size', 'weight', 'quantity', 'complexity', 'location'],
        discounts: ['bulk-removal', 'furniture-sets', 'repeat-customer']
      },
      availability: {
        standard: ['8 AM - 5 PM', 'Monday - Friday'],
        urgent: ['Same-day service', '2-4 hour response'],
        weekend: ['Saturday appointments', 'Premium pricing']
      },
      requirements: ['Clear access path', 'Remove personal items', 'Identify furniture type'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal'],
      faqs: [
        {
          question: 'How much does furniture removal cost?',
          answer: 'Furniture removal starts at $100 and varies based on size, weight, and complexity.',
          keywords: ['cost', 'price', 'furniture', 'removal']
        },
        {
          question: 'Can you remove furniture from upstairs?',
          answer: 'Yes! Our team is trained to safely remove furniture from any location in your home.',
          keywords: ['upstairs', 'stairs', 'second-floor', 'apartment']
        },
        {
          question: 'Do you handle antique furniture?',
          answer: 'Absolutely! We have special training for delicate and antique furniture with extra care.',
          keywords: ['antique', 'delicate', 'valuable', 'careful']
        }
      ]
    })

    this.serviceKnowledge.set('garage-cleanout', {
      service: 'Garage Cleanout',
      pricing: {
        base: 150,
        variables: ['volume', 'complexity', 'hazardous-materials', 'location'],
        discounts: ['full-cleanout', 'repeat-customer', 'bulk-discount']
      },
      availability: {
        standard: ['8 AM - 5 PM', 'Monday - Friday'],
        urgent: ['Same-day service', '2-4 hour response'],
        weekend: ['Saturday appointments', 'Premium pricing']
      },
      requirements: ['Clear access', 'Identify hazardous materials', 'Sort items'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Cleanout', 'Disposal'],
      faqs: [
        {
          question: 'How much does garage cleanout cost?',
          answer: 'Garage cleanout pricing ranges from $150-$500 depending on volume and complexity.',
          keywords: ['cost', 'price', 'garage', 'cleanout']
        },
        {
          question: 'How long does a garage cleanout take?',
          answer: 'Most garage cleanouts take 2-4 hours, depending on the size and amount of items.',
          keywords: ['time', 'duration', 'how-long', 'schedule']
        },
        {
          question: 'Do you handle hazardous materials?',
          answer: 'Yes, we have specialized training and equipment for safe hazardous material disposal.',
          keywords: ['hazardous', 'chemicals', 'paint', 'oil', 'safe']
        }
      ]
    })
  }

  // Initialize intent recognition patterns
  private initializeIntentPatterns() {
    this.intentPatterns = [
      {
        pattern: 'pricing',
        confidence: 0.9,
        responses: [
          'I\'d be happy to help with pricing! Our rates vary by service type and volume.',
          'Let me provide you with accurate pricing information for your specific needs.',
          'Pricing depends on several factors. Let me break this down for you.'
        ],
        entities: ['price', 'cost', 'quote', 'estimate'],
        context: ['pricing', 'financial']
      },
      {
        pattern: 'scheduling',
        confidence: 0.9,
        responses: [
          'Great! Let\'s get you scheduled for service.',
          'I can help you find the perfect time slot for your service.',
          'Scheduling is easy! Let me check our availability for you.'
        ],
        entities: ['schedule', 'book', 'appointment', 'when'],
        context: ['scheduling', 'timing']
      },
      {
        pattern: 'urgent',
        confidence: 0.95,
        responses: [
          'I understand this is urgent! We prioritize emergency situations.',
          'For urgent service, we can typically be there within 2-4 hours.',
          'Let me get you scheduled for immediate service.'
        ],
        entities: ['urgent', 'emergency', 'same-day', 'asap'],
        context: ['urgent', 'emergency']
      },
      {
        pattern: 'location',
        confidence: 0.85,
        responses: [
          'We serve all of Jacksonville and surrounding areas.',
          'Let me check our service coverage for your specific location.',
          'I can provide area-specific information and pricing.'
        ],
        entities: ['location', 'area', 'jacksonville', 'serve'],
        context: ['location', 'coverage']
      }
    ]
  }

  // Learn from user interactions
  learnFromInteraction(input: string, intent: string, entities: string[], response: string, satisfaction: number, context: string[]) {
    const trainingData: TrainingData = {
      input,
      intent,
      entities,
      response,
      userSatisfaction: satisfaction,
      timestamp: new Date(),
      context
    }

    this.trainingData.push(trainingData)
    this.updateIntentPatterns(trainingData)
    this.updateUserSatisfaction(intent, satisfaction)
  }

  // Update intent patterns based on new data
  private updateIntentPatterns(data: TrainingData) {
    const existingPattern = this.intentPatterns.find(p => p.pattern === data.intent)
    
    if (existingPattern) {
      // Update confidence based on user satisfaction
      existingPattern.confidence = Math.min(1, existingPattern.confidence + (data.userSatisfaction - 0.5) * 0.1)
      
      // Add new entities if not present
      data.entities.forEach(entity => {
        if (!existingPattern.entities.includes(entity)) {
          existingPattern.entities.push(entity)
        }
      })
      
      // Add new context if not present
      data.context.forEach(ctx => {
        if (!existingPattern.context.includes(ctx)) {
          existingPattern.context.push(ctx)
        }
      })
    } else {
      // Create new pattern
      this.intentPatterns.push({
        pattern: data.intent,
        confidence: data.userSatisfaction,
        responses: [data.response],
        entities: data.entities,
        context: data.context
      })
    }
  }

  // Update user satisfaction tracking
  private updateUserSatisfaction(intent: string, satisfaction: number) {
    const current = this.userSatisfaction.get(intent) || 0
    const count = this.trainingData.filter(d => d.intent === intent).length
    const newAverage = (current * (count - 1) + satisfaction) / count
    this.userSatisfaction.set(intent, newAverage)
  }

  // Get best response for intent
  getBestResponse(intent: string, entities: string[], context: string[]): string {
    const pattern = this.intentPatterns.find(p => p.pattern === intent)
    
    if (!pattern) {
      return this.getFallbackResponse(intent, entities, context)
    }

    // Get service-specific knowledge if available
    const serviceEntity = entities.find(e => this.serviceKnowledge.has(e))
    if (serviceEntity) {
      const service = this.serviceKnowledge.get(serviceEntity)!
      return this.generateServiceResponse(service, intent, context)
    }

    // Return best matching response
    return pattern.responses[Math.floor(Math.random() * pattern.responses.length)]
  }

  // Generate service-specific response
  private generateServiceResponse(service: ServiceKnowledge, intent: string, context: string[]): string {
    if (intent === 'pricing') {
      return `For ${service.service}, our pricing starts at $${service.pricing.base}. The final cost depends on factors like ${service.pricing.variables.join(', ')}. We also offer discounts for ${service.pricing.discounts.join(', ')}. Would you like a detailed quote?`
    }
    
    if (intent === 'scheduling') {
      const availability = context.includes('urgent') ? service.availability.urgent : service.availability.standard
      return `Great! For ${service.Service}, we're available ${availability.join(', ')}. ${context.includes('urgent') ? 'Since this is urgent, we can provide same-day service.' : 'What date works best for you?'}`
    }

    return `I'd be happy to help with ${service.Service}! What specific information do you need - pricing, scheduling, or process details?`
  }

  // Get fallback response
  private getFallbackResponse(intent: string, entities: string[], context: string[]): string {
    if (intent === 'pricing') {
      return 'I\'d be happy to help with pricing! Our rates vary by service type and volume. What specific service are you interested in?'
    }
    
    if (intent === 'scheduling') {
      return 'Great! Let\'s get you scheduled. We offer flexible scheduling with same-day service available. What service do you need?'
    }

    return 'Thank you for your message! I\'d be happy to help you with your junk removal needs. How can I assist you today?'
  }

  // Get conversation suggestions
  getConversationSuggestions(context: string[], entities: string[]): string[] {
    const suggestions: string[] = []
    
    if (context.includes('pricing')) {
      suggestions.push('Get detailed quote', 'Service pricing', 'Special offers', 'Payment options')
    }
    
    if (context.includes('scheduling')) {
      suggestions.push('Book now', 'Available dates', 'Same-day service', 'Weekend options')
    }
    
    if (context.includes('location')) {
      suggestions.push('Service areas', 'Check coverage', 'Local pricing', 'Area-specific services')
    }

    // Add service-specific suggestions
    entities.forEach(entity => {
      if (this.serviceKnowledge.has(entity)) {
        const service = this.serviceKnowledge.get(entity)!
        suggestions.push(`More about ${service.service}`, `${service.service} pricing`, `${service.service} process`)
      }
    })

    return suggestions.length > 0 ? suggestions : ['Get a free quote', 'Schedule service', 'Pricing information', 'Service areas']
  }

  // Get performance analytics
  getPerformanceAnalytics() {
    const totalInteractions = this.trainingData.length
    const averageSatisfaction = this.trainingData.reduce((sum, data) => sum + data.userSatisfaction, 0) / totalInteractions
    
    const intentPerformance = Array.from(this.userSatisfaction.entries()).map(([intent, satisfaction]) => ({
      intent,
      satisfaction,
      count: this.trainingData.filter(d => d.intent === intent).length
    }))

    return {
      totalInteractions,
      averageSatisfaction,
      intentPerformance,
      topIntents: intentPerformance.sort((a, b) => b.count - a.count).slice(0, 5)
    }
  }

  // Export training data for external analysis
  exportTrainingData(): TrainingData[] {
    return [...this.trainingData]
  }

  // Import training data from external source
  importTrainingData(data: TrainingData[]) {
    this.trainingData.push(...data)
    data.forEach(d => this.updateIntentPatterns(d))
  }
}

// Export singleton instance
export const aiTrainingSystem = new AITrainingSystem()
