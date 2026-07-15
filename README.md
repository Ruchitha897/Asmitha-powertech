# Asmitha Power Tech Web Portal

A premium, Fortune 500-inspired corporate industrial website for **Asmitha Power Tech**, a trusted provider of Kirloskar Diesel Generator (DG) Sales, AMCs, physical installations, repairs, and genuine parts.

## Project Structure

This project is organized as separate services for frontend presentation and backend API integrations:

```
asmithapowertech/
├── frontend/             # Next.js App Router, TypeScript, Tailwind CSS, Framer Motion
├── backend/              # Node.js, Express, TypeScript, Nodemailer for mail logs
├── docker-compose.yml    # Coordinates local multi-container environments
└── README.md             # Project documentation
```

---

## Service Ports

- **Frontend**: `http://localhost:3000` (Next.js server)
- **Backend API**: `http://localhost:5000` (Express API)

---

## Getting Started (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ 
- NPM or Yarn package managers

### Running Frontend Locally

1. Navigate to the `frontend/` folder:
   ```bash
   cd frontend
   ```
2. Build or start the hot-reloading development server:
   ```bash
   npm run dev
   ```

### Running Backend Locally

1. Navigate to the `backend/` folder:
   ```bash
   cd backend
   ```
2. Configure credentials in `.env` (optional, see **Email Configuration** below).
3. Start the hot-reloading Express API server:
   ```bash
   npm run dev
   ```

---

## Docker Compose Deployment

To build and launch both services inside Docker containers, run the following from the root workspace directory:

```bash
docker-compose up --build
```

---

## Email Configuration

The backend is configured to send notifications to the business and auto-responses to customers when contact forms are submitted. To configure actual email delivery:

1. Create a `.env` file in the `backend/` directory (you can copy `.env.example`).
2. Add your SMTP email provider credentials:
   ```env
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_smtp_username@gmail.com
   SMTP_PASS=your_gmail_app_password
   NOTIFICATION_EMAIL=asmithapowertech@gmail.com
   ```
   *Note: If these settings are left blank, the backend will log all contact form details directly to `backend/data/leads.json` and return a successful simulated response so the form operates normally without crashing.*
