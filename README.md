# Physical AI & Humanoid Robotics Textbook

A comprehensive, interactive educational platform exploring the intersection of Large Language Models and robotic hardware. This hackathon project features 12 detailed chapters, secure authentication, and an AI assistant strictly bounded to textbook content.

## 🌟 Features

### 📚 Interactive Textbook (12 Chapters)

1. **Introduction to Physical AI** - The convergence of AI and robotics
2. **The Humanoid Form Factor** - Anatomy, DoF, and materials
3. **Actuators & Locomotion** - Motors, torque density, and movement
4. **Sensors & Perception** - Vision, LiDAR, and sensor fusion
5. **Batteries & Power Systems** - Energy density and thermal management
6. **Edge Computing vs Cloud Brains** - Split brain architecture
7. **Control Theory & RL** - From MPC to neural policies
8. **VLA Models** - Vision-Language-Action integration
9. **Sim-to-Real Transfer** - Training in simulation
10. **Safety & Ethics** - Standards and societal impact
11. **Case Studies** - Tesla Optimus, Figure 01, Unitree
12. **Future Frontiers** - Space exploration and AGI

### 🤖 Intelligent AI Assistant

- **Textbook-Bounded**: Only answers from the 12 chapters
- **Semantic Search**: Intelligently searches across all content
- **Custom Neural Logo**: Physical AI-themed design
- **Voice-Style UX**: Thinking animation with subtle sound effects
- **Polite Boundaries**: Declines out-of-scope questions gracefully

### 🔐 Secure Authentication

- NextAuth.js integration
- Protected textbook and chatbot access
- Google AI Studio-inspired dark UI
- Session management

### 🎨 Premium UI/UX

- **True Dark Mode**: Calm, focused reading environment
- **Background Snowfall**: Canvas-based particle effects
- **Typography**: Optimized for long-form technical content
- **Blue Accents**: Highlighting key concepts
- **Responsive Design**: Mobile-first approach

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/physical-ai-textbook.git
cd physical-ai-textbook

# Install dependencies
npm install

# Set up environment variables
cp env.template.txt .env.local
# Edit .env.local and add your NEXTAUTH_SECRET

# Run development server
npm run dev
```

Visit `http://localhost:3000`

### Environment Variables

Create a `.env.local` file:

```env
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000
```

Generate a secret:

```bash
openssl rand -base64 32
```

## 📖 Usage

### Login

For demo purposes, use:

- **Email**: any valid email format
- **Password**: `password` or `demo`

⚠️ **Important**: Change authentication logic in `src/lib/auth.ts` for production use.

### Textbook

Navigate through 12 comprehensive chapters using the sidebar. Each chapter includes:

- Advanced technical content
- Visual concepts and diagrams
- Blue-highlighted key terms

### AI Chatbot

Click the floating neural network icon to:

- Ask questions about any chapter
- Get textbook-bounded responses
- Experience voice-mode thinking animations

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js
- **Styling**: Vanilla CSS / CSS Modules
- **UI Components**: Custom React components
- **Icons**: Lucide React + Custom SVG
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
physical-ai-textbook/
├── public/
│   └── images/          # Chapter hero images
├── src/
│   ├── app/
│   │   ├── (auth)/     # Login/Signup pages
│   │   ├── api/        # API routes (chat, auth)
│   │   ├── textbook/   # Textbook pages
│   │   └── globals.css # Global styles
│   ├── components/
│   │   ├── chat/       # ChatInterface
│   │   ├── effects/    # Snowfall
│   │   ├── layout/     # StudioLayout
│   │   └── textbook/   # Sidebar, Chapter content
│   ├── lib/
│   │   ├── auth.ts           # NextAuth config
│   │   ├── audio.ts          # Sound effects
│   │   └── textbook-knowledge.ts # Chatbot KB
│   └── middleware.ts   # Route protection
├── DEPLOYMENT.md       # Deployment guide
└── package.json
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)
4. Deploy

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for detailed instructions.

## 🎓 Educational Focus

This project demonstrates:

- **Modern Next.js 14** patterns (App Router, Server Components)
- **Authentication** best practices
- **Semantic search** implementation
- **RAG** (Retrieval-Augmented Generation) concepts
- **UI/UX** for technical content
- **Production-ready** code structure

## 📄 License

MIT License - Built for educational and hackathon purposes.

## 🙏 Acknowledgments

Inspired by state-of-the-art Physical AI research from:

- Tesla Optimus Team
- Figure AI
- Boston Dynamics
- Google DeepMind Robotics

---

**Built with ❤️ for the future of Physical AI**
