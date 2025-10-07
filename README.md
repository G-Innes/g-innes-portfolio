# Portfolio Website

A modern, animated portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Animated hero section with background beams
- Interactive project showcase
- Contact form with EmailJS integration
- Responsive design
- Modern UI components with animations

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Getting EmailJS Credentials

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Get your credentials:
   - **Service ID**: Found in Email Services section
   - **Template ID**: Found in Email Templates section
   - **Public Key**: Found in Account > General > Public Key

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Deployment on Vercel

When deploying to Vercel, make sure to add the following environment variables in your project settings:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Important**: Ensure the variable names in Vercel exactly match the names above (including the `VITE_` prefix).

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (motion)
- EmailJS
- Lucide React (icons)
