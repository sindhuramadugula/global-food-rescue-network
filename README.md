# Global Food Rescue Network

A production-oriented food rescue platform that connects donors, NGOs, volunteers, and verified organizations to redirect safe surplus food to people in need.

## Phase 1 Deliverables

This phase establishes the application foundation:

- Monorepo project structure
- Frontend + backend app bootstrapping
- Prisma schema design for the core domain model
- JWT-based authentication and role scaffolding
- Environment configuration
- API documentation and seed-ready structure

## Tech Stack

- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL + Prisma ORM
- Auth: JWT + bcrypt hashing + RBAC middleware
- Mapping/real-time: structured for later integration in future phases

## Workspace Layout

- /apps/web — Vite React web app
- /apps/api — Express + Prisma API service
- /packages/types — shared TypeScript models
- /packages/config — shared config (future use)
- /prisma — database schema and seed scripts
- /docs — architecture and usage docs

## Quick Start

1. Install dependencies:
   npm install
2. Create your environment file:
   cp .env.example .env
3. Configure PostgreSQL URL and JWT secret.
4. Generate Prisma client:
   npm run db:generate
5. Push schema to database:
   npm run db:push
6. Start backend:
   npm run dev:api
7. Start frontend:
   npm run dev

## Roadmap

- Phase 1: Foundation + auth + schema
- Phase 2: Role-based dashboards
- Phase 3: Donation + food request flow
- Phase 4: NGO + volunteer workflow
- Phase 5: Maps + matching
- Phase 6: Real-time tracking
- Phase 7: Expiry + emergency rescue
- Phase 8: QR food passport
- Phase 9: Analytics + AI features
- Phase 10: Notifications + rewards + certificates
- Phase 11: Security + testing
- Phase 12: Deployment + documentation

## Security Notes

This project intentionally avoids storing raw payment data in the frontend and requires organizations to verify food safety handling responsibilities separately.

## License

MIT
