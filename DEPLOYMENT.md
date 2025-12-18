# Physical AI Textbook - Deployment Guide

## Project Overview

A professional, hackathon-grade educational platform featuring a 12-chapter interactive textbook on Physical AI & Humanoid Rob

otics, secure authentication, and an intelligent AI chatbot bounded to textbook content.

## Local Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd physical-ai-textbook

# Install dependencies
npm install

# Create environment file
cp env.template.txt .env.local

# Edit .env.local and set:
# NEXTAUTH_SECRET=<generate-a-random-secret>
# NEXTAUTH_URL=http://localhost:3000

# Run development server
npm run dev
```

Visit `http://localhost:3000`

## Deployment to Vercel

### Quick Deploy

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard:
   - `NEXTAUTH_SECRET`: Generate using `openssl rand -base64 32`
   - `NEXTAUTH_URL`: Your production URL (e.g., `https://your-app.vercel.app`)
5. Deploy

### Authentication

The platform uses NextAuth.js for authentication. For demo purposes, any email with password "password" or "demo" will grant access. **Change this in production** by modifying `src/lib/auth.ts`.

## Features

### Authorization

- Secure login/signup system
- Protected textbook and chatbot routes
- Session management via NextAuth

### Textbook (12 Chapters)

1. Introduction to Physical AI
2. The Humanoid Form Factor
3. Actuators & Locomotion
4. Sensors & Perception
5. Batteries & Power Systems
6. Edge Computing vs Cloud Brains
7. Control Theory & RL
8. VLA Models
9. Sim-to-Real Transfer
10. Safety & Ethics
11. Case Studies
12. Future Frontiers

### AI Chatbot

- **Textbook-Bounded**: Only answers from the 12 chapters
- **Semantic Search**: Searches across all chapter content
- **Intelligent Responses**: Politely declines out-of-scope questions
- **Voice-Style UX**: Thinking animation with subtle sound effect
- **Custom Logo**: Neural network-inspired design

## Production Enhancements (Optional)

To enable LLM-powered chatbot responses:

1. Add API key to environment variables
2. Uncomment LLM integration in `src/app/api/chat/route.ts`
3. The chatbot will use textbook content as context for LLM responses

## Repository Structure

```
physical-ai-textbook/
├── public/ - Static assets and images
├── src/
│   ├── app/ - Next.js App Router pages
│   ├── components/ - React components
│   ├── lib/ - Utilities (auth, knowledge base, audio)
│   └── middleware.ts - Route protection
├── env.template.txt - Environment variable template
└── package.json
```

## Support

For issues or questions, please open a GitHub issue.
