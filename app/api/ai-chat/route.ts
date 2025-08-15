import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    // Verify API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured')
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      )
    }

    const { message, conversationHistory, userContext } = await request.json()

    // Create system prompt for junk removal expertise
    const systemPrompt = `You are an expert AI assistant for Jacksonville Junk Removals, a professional junk removal company serving Jacksonville, Florida and surrounding areas.

Your expertise includes:
- Junk removal services (mattress, furniture, appliance, construction debris, garage cleanout, etc.)
- Pricing information and quotes
- Scheduling and availability
- Service areas (Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, San Marco)
- Eco-friendly disposal practices
- Same-day and emergency services

Key information:
- Company: Jacksonville Junk Removals
- Phone: (904) 456-3851
- Service area: Jacksonville, FL and surrounding areas
- Same-day service available
- Weekend appointments available (premium pricing)
- Free estimates and quotes

Guidelines:
- Be helpful, professional, and friendly
- Provide accurate pricing when possible (starting prices)
- Always offer to help with quotes or scheduling
- Mention same-day service for urgent requests
- Keep responses concise but informative
- If you don't know specific details, suggest calling or using the online tools
- Never make up pricing or availability you're unsure about

Current conversation context: ${userContext || 'New conversation'}`

    // Prepare conversation messages
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ]

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 300,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    })

    const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please call us at (904) 456-3851 for immediate assistance.'

    // Log the interaction for monitoring (without sensitive data)
    console.log('AI Chat Interaction:', {
      timestamp: new Date().toISOString(),
      userMessageLength: message.length,
      aiResponseLength: aiResponse.length,
      tokensUsed: completion.usage?.total_tokens || 0,
      model: completion.model,
    })

    return NextResponse.json({
      response: aiResponse,
      usage: {
        totalTokens: completion.usage?.total_tokens || 0,
        promptTokens: completion.usage?.prompt_tokens || 0,
        completionTokens: completion.usage?.completion_tokens || 0,
      }
    })

  } catch (error) {
    console.error('AI Chat API Error:', error)
    
    // Don't expose internal errors to users
    return NextResponse.json(
      { 
        error: 'I\'m experiencing technical difficulties. Please call us at (904) 456-3851 for immediate assistance.',
        fallback: true
      },
      { status: 500 }
    )
  }
}
