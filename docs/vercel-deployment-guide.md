# Asmitha Power Tech Deployment Guide

This project is structured as a monorepo containing a **Next.js Frontend** and an **Express.js Backend**. Because Vercel is designed for serverless frontends, you should host your Node.js backend on a continuous platform like Render, and your frontend on Vercel.

## 1. Backend Deployment (Render or Railway)
Your backend stores local leads.json data and handles email dispatching.
1. Create an account on Render or Railway.
2. Connect your GitHub repository.
3. Select **Web Service** and choose the ackend directory as your Root Directory.
4. Build Command: 
pm install && npm run build (if using TypeScript) or just 
pm install.
5. Start Command: 
pm start or 
ode dist/server.js (ensure you've compiled it).
6. **Environment Variables**: Add your SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and NOTIFICATION_EMAIL.
7. Once deployed, copy the live URL.

## 2. Frontend Deployment (Vercel)
1. Go to Vercel and click **Add New Project**.
2. Import your GitHub repository (Asmitha-powertech).
3. In the Configuration settings:
   - **Root Directory**: Select rontend.
   - **Framework Preset**: Next.js (should be auto-detected).
4. Open the **Environment Variables** tab:
   - Add NEXT_PUBLIC_API_URL and set its value to your live backend URL from Step 1.
5. Click **Deploy**. Vercel will automatically build the Next.js site and make it live.
