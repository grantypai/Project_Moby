# UIGen - Claude Code Guide

## Project Overview
AI-powered React component generator with live preview. Users describe components in chat; Claude generates them with a virtual file system and live preview.

## Setup
```bash
npm run setup       # install deps + generate Prisma client + run migrations
```

Add API key to `.env`:
```
ANTHROPIC_API_KEY=your-api-key-here
```

## Dev Commands
```bash
npm run dev         # start dev server (localhost:3000)
npm run dev:daemon  # start in background, logs to logs.txt
npm run build       # production build
npm run start       # production server
npm run lint        # ESLint
npm run test        # Vitest
npm run db:reset    # reset database (destructive)
```

## Tech Stack
- **Next.js 15** with App Router and Turbopack
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Prisma** with SQLite (`prisma/dev.db`)
- **Anthropic Claude** via Vercel AI SDK (`@ai-sdk/anthropic`)
- **Monaco Editor** for code editing
- **Vitest** + Testing Library for tests

## Project Structure
```
src/
  app/          # Next.js App Router pages and API routes
  actions/      # Server actions
  components/   # React components
  hooks/        # Custom React hooks
  lib/          # Utilities and shared logic
  generated/    # Prisma generated client (do not edit)
prisma/
  schema.prisma # Database schema
  migrations/   # Migration history
  dev.db        # SQLite database
```

## Key Notes
- App works without an API key — returns static code instead of AI-generated components
- Virtual file system: generated components are not written to disk
- Authentication: supports both anonymous and registered users
- Model: `claude-haiku-4-5` (configured in API route)
- `.env` is gitignored — never commit API keys
