import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Set the SendGrid API key from environment variables
const sendgridApiKey = process.env.SENDGRID_API_KEY;
if (!sendgridApiKey) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
  throw new Error('Email service is not properly configured');
}
sgMail.setApiKey(sendgridApiKey);

// Define the email template
const createEmailContent = (name: string, email: string, subject: string, message: string) => ({
  to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'ozymandias.work@gmail.com',
  from: process.env.NEXT_PUBLIC_SENDER_EMAIL || 'noreply@ozymandias.work',
  replyTo: email,
  subject: `New Contact: ${subject}`,
  text: `
    You have a new contact form submission:
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
  `,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line; background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      </div>
      <p style="margin-top: 20px; color: #6b7280; font-size: 0.9em;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `,
});

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    // Create email message
    const msg = createEmailContent(name, email, subject, message);
    
    // Send email using SendGrid
    console.log('Attempting to send email with data:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
      hasText: !!msg.text,
      hasHtml: !!msg.html
    });

    try {
      const [response] = await sgMail.send(msg);
      
      // Log the response for debugging
      console.log('Email sent successfully:', response.statusCode);
      console.log('Message ID:', response.headers?.['x-message-id']);
      console.log('Response headers:', JSON.stringify(response.headers, null, 2));

      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
        status: response.statusCode
      });
    } catch (sendError: unknown) {
      console.error('Error in sgMail.send:', sendError);
      if (sendError && typeof sendError === 'object' && 'response' in sendError) {
        const errorResponse = sendError as { 
          response?: { 
            status?: number; 
            body?: unknown; 
            headers?: Record<string, string> 
          } 
        };
        console.error('SendGrid response error:', {
          status: errorResponse.response?.status,
          body: errorResponse.response?.body,
          headers: errorResponse.response?.headers
        });
      }
      throw sendError;
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : String(error);
    
    console.error('Error in contact API route:', {
      error: errorMessage,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' && error instanceof Error 
          ? error.message 
          : undefined
      },
      { status: 500 }
    );
  }
}
