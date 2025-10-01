# User Management Dashboard

A modern frontend application for managing users, built with Next.js 15 and TypeScript.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **shadcn/ui** - UI components
- **React Query** - Data fetching and caching
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Validation
- **Axios** - HTTP client

## Prerequisites

- Node.js 18+
- Backend API running on `http://localhost:3000`

## Installation

```bash
# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local

# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Features

- 🔐 **Authentication** - Login/Register with JWT
- 👥 **User Management** - Full CRUD operations
- 📊 **Dashboard** - Overview statistics
- 🎨 **Modern UI** - Clean and responsive design
- 🔄 **Auto Token Refresh** - Seamless authentication
- ⚡ **Optimistic Updates** - Fast UI feedback
- 🎯 **Type Safe** - Full TypeScript support

## Project Structure

```
src/
├── app/
│   ├── (auth)/           # Auth pages (login, register)
│   ├── (dashboard)/      # Protected pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn components
│   └── layout/           # Layout components
├── lib/
│   ├── api.ts            # Axios instance
│   ├── auth.ts           # Auth service
│   └── users.ts          # Users service
├── store/
│   └── authStore.ts      # Auth state management
└── types/
    └── index.ts          # TypeScript types
```

## API Integration

The app connects to the NestJS backend API. Make sure the backend is running on `http://localhost:3000`.

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Pages

- `/` - Landing page
- `/login` - User login
- `/register` - User registration
- `/dashboard` - Dashboard overview (protected)
- `/users` - User management (protected)

## Authentication Flow

1. User logs in/registers
2. JWT tokens stored in localStorage
3. Access token sent with each API request
4. Auto-refresh when token expires
5. Redirect to login if refresh fails

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the app:

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## Development Tips

- Use React Query DevTools for debugging queries
- Check browser console for API errors
- Ensure backend CORS is configured for frontend URL

## License

MIT