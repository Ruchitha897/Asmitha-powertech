import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Allow embeds and scripts if integrated later
}));
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

// Ensure database directory exists for local lead persistence
const LEADS_FILE = path.join(__dirname, "../data/leads.json");
const dataDir = path.dirname(LEADS_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
});

// Contact/Quote Inquiry API
app.post("/api/contact", async (req, res): Promise<any> => {
  try {
    const { name, phone, email, company, location, requirement } = req.body;

    // Server-side validation
    if (!name || !phone || !email || !requirement) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields. Please supply Name, Phone, Email, and Requirement.",
      });
    }

    // Save lead to local database (leads.json) as fallback/audit log
    const lead = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      company: company || "N/A",
      location: location || "N/A",
      requirement,
      createdAt: new Date().toISOString()
    };

    const fileContent = fs.readFileSync(LEADS_FILE, "utf-8");
    const leads = JSON.parse(fileContent);
    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log("New Lead Saved:", lead);

    // Email delivery logic
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notifyEmail = process.env.NOTIFICATION_EMAIL || "asmithapowertech@gmail.com";

    let emailSent = false;
    let emailStatusMessage = "Inquiry logged to system database.";

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for others
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // Email to business owner
        const mailToOwner = {
          from: `"Asmitha Power Tech Website" <${smtpUser}>`,
          to: notifyEmail,
          subject: `New DG Generator Inquiry from ${name}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
              <h2 style="color: #FF5E14; margin-top: 0;">New Power Backup Inquiry</h2>
              <p>You have received a new business lead from the Asmitha Power Tech website contact form.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #dddddd; width: 35%;">Client Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #dddddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #dddddd;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #dddddd;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #dddddd;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #dddddd;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #dddddd;">Company:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #dddddd;">${company || "N/A"}</td>
                </tr>
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #dddddd;">Location:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #dddddd;">${location || "N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; vertical-align: top;">Requirement:</td>
                  <td style="padding: 10px; white-space: pre-line;">${requirement}</td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; font-size: 12px; color: #888888; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
                This email was auto-generated by the Asmitha Power Tech Web Portal.
              </div>
            </div>
          `,
        };

        // Auto-reply to customer
        const mailToCustomer = {
          from: `"Asmitha Power Tech" <${smtpUser}>`,
          to: email,
          subject: `Thank you for contacting Asmitha Power Tech`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
              <h2 style="color: #FF5E14; margin-top: 0;">Inquiry Received</h2>
              <p>Dear <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to <strong>Asmitha Power Tech</strong>. We have received your request for our power backup solutions and Kirloskar Diesel Generator services.</p>
              <p>Our sales and service team is reviewing your requirements and will contact you within 24 hours to discuss how we can assist you.</p>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #FF5E14;">
                <h4 style="margin: 0 0 10px 0; color: #111111;">Your Submitted Requirement:</h4>
                <p style="margin: 0; font-style: italic; font-size: 14px; color: #555555;">"${requirement}"</p>
              </div>

              <p>If you have any urgent questions, please feel free to call us directly at <strong>+91 9010201749</strong> or email us at <strong>asmithapowertech@gmail.com</strong>.</p>
              
              <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 25px 0;" />
              <p style="margin: 0; font-size: 14px;">Best Regards,</p>
              <p style="margin: 0; font-weight: bold; color: #111111;">Asmitha Power Tech Team</p>
              <p style="margin: 0; font-size: 12px; color: #777777;">Authorized Kirloskar Diesel Generator Sales & AMC Partner</p>
            </div>
          `,
        };

        await transporter.sendMail(mailToOwner);
        // Fire and forget customer response
        transporter.sendMail(mailToCustomer).catch((err) => {
          console.error("Error sending client confirmation email:", err);
        });

        emailSent = true;
        emailStatusMessage = "Inquiry logged and emails sent successfully.";
      } catch (emailErr) {
        console.error("Nodemailer failed to deliver emails:", emailErr);
        emailStatusMessage = "Inquiry logged locally. Mail server delivery encountered an error.";
      }
    } else {
      console.log("SMTP Environment settings missing. Mock-sending inquiry email notification.");
    }

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
      emailSent,
      status: emailStatusMessage,
      data: lead
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while processing your request.",
    });
  }
});

// Serve frontend build static files in production if needed
if (process.env.NODE_ENV === "production") {
  const frontendBuildPath = path.join(__dirname, "../../frontend/out");
  if (fs.existsSync(frontendBuildPath)) {
    app.use(express.static(frontendBuildPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(frontendBuildPath, "index.html"));
    });
  }
}

app.listen(PORT, () => {
  console.log(`Backend API Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`Audited leads storage available at: ${LEADS_FILE}`);
});
