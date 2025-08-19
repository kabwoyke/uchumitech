# Protrixx Tech Solutions Portfolio Website

## Overview

This is a modern, minimal, and professional full-stack portfolio website for Protrixx Tech Solutions, a technology company specializing in clean digital experiences, innovative tools, and custom software solutions. The application features a beautiful single-page design with smooth animations, a contact form with email integration, showcases the company's services, and highlights the Protrixx Tools suite including YouTube Downloader, ProtrixxAI, and ProtrixxLearn.

## User Preferences

Preferred communication style: Simple, everyday language.
Color scheme preference: Modern tech colors (moved from Kenyan-inspired to professional tech palette on 2025-01-11)

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with modern tech color scheme (deep blues, teals, purples) and shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Single-page application with modular sections (Hero, About, Services, Projects, Contact, Footer)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with a single contact form endpoint (`/api/contact`)
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Email Service**: Nodemailer integration for contact form submissions
- **Development**: Hot reload with Vite middleware integration

### Database Schema
The application uses Drizzle ORM with PostgreSQL-compatible schema definition:
- **Users Table**: Basic user management with username/password authentication
- **Contacts Table**: Contact form submissions with name, email, message, and timestamp
- **Schema Validation**: Zod integration for type-safe data validation

### Authentication and Authorization
- Basic user authentication structure is implemented but not currently active in the UI
- Session-based authentication preparation with PostgreSQL session storage
- Contact form uses validation without authentication requirements

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Email Service**: Nodemailer (configured for Gmail SMTP)
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Animation Library**: Framer Motion for page and component animations

### Development Tools
- **Build Tool**: Vite with React plugin and runtime error overlay
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Development Environment**: Replit-specific plugins for cartographer and runtime error handling
- **Type Checking**: TypeScript with strict configuration

### Third-Party Services
- **Email Provider**: Gmail SMTP service for contact form submissions
- **Image Hosting**: Unsplash for project showcase images
- **Font Provider**: Google Fonts (Inter font family)
- **Deployment Platform**: Configured for Replit hosting environment

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance Optimization**: Image optimization and lazy loading
- **SEO Ready**: Semantic HTML structure and meta tag support
- **Accessibility**: ARIA labels and keyboard navigation support
- **Contact Integration**: Direct email forwarding to business email address
- **Color Palette**: Modern tech colors with primary blues (#4F46E5), accent teals (#00A96E), and purple gradients (#8B5CF6)
- **Enhanced Responsiveness**: Mobile-first design with improved grid layouts and responsive typography