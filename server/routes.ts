import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { Resend } from "resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact in our storage
      const contact = await storage.createContact(validatedData);
      
      // Initialize Resend
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Send email using Resend
      await resend.emails.send({
        from: 'contact@protrixxtech.com',
        to: 'edwardkabwoy@gmail.com',
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 500;">New Contact Form Submission</h1>
              <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 16px;">Protrixx Tech Solutions</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 500;">Contact Details</h3>
                <p style="margin: 4px 0; color: #475569;"><strong>Name:</strong> ${validatedData.name}</p>
                <p style="margin: 4px 0; color: #475569;"><strong>Email:</strong> ${validatedData.email}</p>
              </div>
              
              <div>
                <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 500;">Message</h3>
                <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6; color: #374151;">
                  ${validatedData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 20px; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This message was sent from the Protrixx Tech Solutions website contact form.
              </p>
            </div>
          </div>
        `
      });
      
      res.json({ 
        success: true, 
        message: "Message sent successfully! We'll get back to you within 24 hours.",
        contact 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again or contact us directly at edwardkabwoy@gmail.com." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Get contacts error:', error);
      res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
