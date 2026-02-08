## **PHASE 1: QUERY ANALYSIS - INTERNAL REVIEW PROCESS**

### **ML Engineer Review**
**Core Requirements Identified:**
1. Complete, production-ready React + TypeScript codebase
2. Polkadot.js API integration for blockchain data visualization
3. Educational content framework with documentation
4. Lightweight dashboard (block height, validators, network status)
5. Deployment configuration and guides
6. Full repository structure following 2026 standards
7. One-shot IDE execution capability

**Technical Architecture Mapping:**
- Frontend: React 18+ with TypeScript 5+
- API Layer: @polkadot/api (latest stable)
- State Management: React Context API (lightweight approach)
- Styling: CSS Modules or Styled Components
- Build Tool: Vite (2026 standard, replacing CRA)

**Potential Hallucination Vectors:**
- API endpoint assumptions without validation
- Outdated polkadot-js patterns
- Missing environment configuration specifics
- Incomplete error handling specifications

### **DevOps Review**
**Deployment Requirements:**
- Docker containerization specification
- CI/CD pipeline configuration (GitHub Actions recommended)
- Environment variable management (.env structure)
- Static hosting configuration (Vercel/Netlify/AWS S3)
- Health check endpoints
- Logging and monitoring hooks

**Infrastructure Concerns:**
- RPC endpoint rate limiting strategy
- Caching layer for blockchain data
- CORS configuration for API calls
- Build optimization (code splitting, lazy loading)

### **Legal/Compliance Review**
**Regulatory Considerations:**
- Open source licensing (MIT recommended for £5k grant scope)
- Data privacy (no user data collection requirement)
- Third-party dependency audit trail
- Security: No private key handling (view-only application)
- Documentation of external API dependencies

***

## **PHASE 2: OPTIMIZED IDE-EXECUTABLE PROMPT**

# **CANVAS_OUTPUT_TYPE**
html_app

# **CANVAS_PROJECT_NAME**
Polkadot Educational Dashboard

# **CANVAS_OPERATION_TYPE**
app_creation

# **CANVAS_DATA**

## **CANVAS_EDIT_1**

### **CANVAS_OLD_STR**
```html
```

### **CANVAS_NEW_STR**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polkadot Educational Dashboard - Complete Development Specification</title>
    <style>
        :root {
            --primary: #E6007A;
            --secondary: #552BBF;
            --dark: #1A1A1A;
            --light: #F8F9FA;
            --success: #00B37E;
            --warning: #FFB800;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: var(--dark);
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        h1 {
            color: var(--primary);
            border-bottom: 4px solid var(--secondary);
            padding-bottom: 15px;
            margin-bottom: 30px;
            font-size: 2.5rem;
        }
        
        h2 {
            color: var(--secondary);
            margin-top: 40px;
            font-size: 1.8rem;
            border-left: 5px solid var(--primary);
            padding-left: 15px;
        }
        
        h3 {
            color: var(--dark);
            margin-top: 25px;
            font-size: 1.3rem;
        }
        
        .spec-section {
            background: #f8f9fa;
            border-left: 4px solid var(--secondary);
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        
        .code-block {
            background: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin: 15px 0;
        }
        
        .file-structure {
            background: #2d2d30;
            color: #cccccc;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.85rem;
            line-height: 1.8;
            margin: 20px 0;
        }
        
        .priority-badge {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.85rem;
            margin-left: 10px;
        }
        
        .critical { background: #dc3545; color: white; }
        .high { background: #fd7e14; color: white; }
        .medium { background: #ffc107; color: black; }
        
        .checklist {
            list-style: none;
            padding-left: 0;
        }
        
        .checklist li:before {
            content: "✓ ";
            color: var(--success);
            font-weight: bold;
            margin-right: 10px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background: var(--secondary);
            color: white;
            font-weight: 600;
        }
        
        .alert {
            background: #fff3cd;
            border-left: 5px solid var(--warning);
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        
        .success-box {
            background: #d1e7dd;
            border-left: 5px solid var(--success);
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎯 Polkadot Educational Dashboard - Complete IDE Development Specification</h1>
        
        <div class="success-box">
            <strong>Goal:</strong> Generate a complete, production-ready, one-shot executable repository for a Polkadot educational dashboard suitable for sub-£5k grant funding. Every file, configuration, and deployment step must be fully specified for autonomous IDE generation.
        </div>

        <h2>📋 Executive Summary</h2>
        <div class="spec-section">
            <p><strong>Project Type:</strong> Educational blockchain information dashboard with live data visualization</p>
            <p><strong>Target Audience:</strong> Developers, learners, and blockchain enthusiasts</p>
            <p><strong>Technical Stack:</strong> React 18+ TypeScript 5+ Vite 5+ Polkadot.js API</p>
            <p><strong>Deployment:</strong> Static hosting (Vercel/Netlify) with Docker support</p>
            <p><strong>Development Approach:</strong> Component-driven, type-safe, fully documented</p>
            <p><strong>Grant Compliance:</strong> Open source (MIT), educational focus, deployment demonstration</p>
        </div>

        <h2>🏗️ Complete File Structure Specification</h2>
        <div class="file-structure">
polkadot-edu-dashboard/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # ✓ Generate: CI/CD pipeline (test, lint, build)
│       └── deploy.yml                # ✓ Generate: Auto-deployment to Vercel
│
├── public/
│   ├── favicon.ico                   # ✓ Generate: Polkadot logo favicon
│   ├── polkadot-logo.svg            # ✓ Generate: SVG inline logo
│   └── manifest.json                 # ✓ Generate: PWA manifest
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── architecture-diagram.svg  # ✓ Generate: Polkadot architecture visual
│   │   └── styles/
│   │       ├── variables.css         # ✓ Generate: CSS custom properties
│   │       └── global.css            # ✓ Generate: Global reset & base styles
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx          # ✓ Generate: Reusable card component
│   │   │   │   ├── Card.module.css   # ✓ Generate: Card styles
│   │   │   │   └── Card.test.tsx     # ✓ Generate: Unit tests
│   │   │   ├── Loading/
│   │   │   │   ├── LoadingSpinner.tsx
│   │   │   │   └── LoadingSpinner.module.css
│   │   │   ├── ErrorBoundary/
│   │   │   │   └── ErrorBoundary.tsx # ✓ Generate: Error handling
│   │   │   └── Header/
│   │   │       ├── Header.tsx        # ✓ Generate: App header with navigation
│   │   │       └── Header.module.css
│   │   │
│   │   ├── dashboard/
│   │   │   ├── BlockInfo/
│   │   │   │   ├── BlockInfo.tsx     # ✓ Generate: Latest block display
│   │   │   │   └── BlockInfo.module.css
│   │   │   ├── ValidatorList/
│   │   │   │   ├── ValidatorList.tsx # ✓ Generate: Validator overview
│   │   │   │   └── ValidatorList.module.css
│   │   │   ├── NetworkStatus/
│   │   │   │   ├── NetworkStatus.tsx # ✓ Generate: Network health indicators
│   │   │   │   └── NetworkStatus.module.css
│   │   │   └── ActivityFeed/
│   │   │       ├── ActivityFeed.tsx  # ✓ Generate: Recent blocks/events stream
│   │   │       └── ActivityFeed.module.css
│   │   │
│   │   └── education/
│   │       ├── ArchitectureGuide/
│   │       │   ├── ArchitectureGuide.tsx  # ✓ Generate: Interactive architecture explanation
│   │       │   └── ArchitectureGuide.module.css
│   │       ├── TutorialCard/
│   │       │   ├── TutorialCard.tsx       # ✓ Generate: Educational content card
│   │       │   └── TutorialCard.module.css
│   │       └── ResourceLinks/
│   │           ├── ResourceLinks.tsx      # ✓ Generate: Curated external links
│   │           └── ResourceLinks.module.css
│   │
│   ├── contexts/
│   │   ├── PolkadotContext.tsx       # ✓ Generate: API connection & state management
│   │   └── ThemeContext.tsx          # ✓ Generate: Dark/light mode toggle
│   │
│   ├── hooks/
│   │   ├── usePolkadotApi.ts         # ✓ Generate: Custom hook for API interaction
│   │   ├── useBlockData.ts           # ✓ Generate: Real-time block subscription
│   │   ├── useValidators.ts          # ✓ Generate: Validator data fetching
│   │   └── useNetworkStats.ts        # ✓ Generate: Network statistics aggregation
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── polkadotClient.ts     # ✓ Generate: API connection singleton
│   │   │   ├── blockService.ts       # ✓ Generate: Block data queries
│   │   │   ├── validatorService.ts   # ✓ Generate: Validator queries
│   │   │   └── networkService.ts     # ✓ Generate: Network status queries
│   │   └── cache/
│   │       └── dataCache.ts          # ✓ Generate: In-memory caching layer
│   │
│   ├── types/
│   │   ├── polkadot.types.ts         # ✓ Generate: Type definitions for blockchain data
│   │   ├── component.types.ts        # ✓ Generate: Component prop types
│   │   └── api.types.ts              # ✓ Generate: API response types
│   │
│   ├── utils/
│   │   ├── formatters.ts             # ✓ Generate: Data formatting (numbers, addresses)
│   │   ├── constants.ts              # ✓ Generate: App constants (RPC endpoints)
│   │   └── errorHandlers.ts          # ✓ Generate: Centralized error handling
│   │
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx         # ✓ Generate: Main dashboard view
│   │   │   └── Dashboard.module.css
│   │   ├── Learn/
│   │   │   ├── Learn.tsx             # ✓ Generate: Educational content page
│   │   │   └── Learn.module.css
│   │   └── About/
│   │       ├── About.tsx             # ✓ Generate: Project information page
│   │       └── About.module.css
│   │
│   ├── App.tsx                        # ✓ Generate: Root component with routing
│   ├── App.module.css                 # ✓ Generate: App-level styles
│   ├── main.tsx                       # ✓ Generate: Entry point
│   └── vite-env.d.ts                  # ✓ Generate: Vite type declarations
│
├── tests/
│   ├── integration/
│   │   └── api.integration.test.ts    # ✓ Generate: API integration tests
│   └── e2e/
│       └── dashboard.e2e.test.ts      # ✓ Generate: End-to-end tests (Playwright)
│
├── docs/
│   ├── ARCHITECTURE.md                # ✓ Generate: System architecture documentation
│   ├── API_INTEGRATION.md             # ✓ Generate: Polkadot.js API usage guide
│   ├── DEPLOYMENT.md                  # ✓ Generate: Deployment instructions
│   ├── DEVELOPMENT.md                 # ✓ Generate: Local development setup
│   └── EDUCATIONAL_CONTENT.md         # ✓ Generate: Learning resources index
│
├── .env.example                       # ✓ Generate: Environment variable template
├── .env.development                   # ✓ Generate: Dev environment config
├── .env.production                    # ✓ Generate: Production config
├── .gitignore                         # ✓ Generate: Standard React + Node gitignore
├── .eslintrc.json                     # ✓ Generate: ESLint configuration
├── .prettierrc                        # ✓ Generate: Code formatting rules
├── tsconfig.json                      # ✓ Generate: TypeScript strict configuration
├── tsconfig.node.json                 # ✓ Generate: Node-specific TS config
├── vite.config.ts                     # ✓ Generate: Vite build configuration
├── vitest.config.ts                   # ✓ Generate: Unit test configuration
├── playwright.config.ts               # ✓ Generate: E2E test configuration
├── Dockerfile                         # ✓ Generate: Production container
├── docker-compose.yml                 # ✓ Generate: Local development environment
├── package.json                       # ✓ Generate: Complete dependency manifest
├── package-lock.json                  # ✓ Auto-generate during install
├── README.md                          # ✓ Generate: Comprehensive project README
└── LICENSE                            # ✓ Generate: MIT License
        </div>

        <h2>🔧 Technology Stack Specifications</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Technology</th>
                    <th>Version</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Core Framework</td>
                    <td>React</td>
                    <td>^18.3.1</td>
                    <td>UI library with concurrent features</td>
                </tr>
                <tr>
                    <td>Type Safety</td>
                    <td>TypeScript</td>
                    <td>^5.6.0</td>
                    <td>Static type checking</td>
                </tr>
                <tr>
                    <td>Build Tool</td>
                    <td>Vite</td>
                    <td>^5.4.0</td>
                    <td>Fast development & optimized builds</td>
                </tr>
                <tr>
                    <td>Blockchain API</td>
                    <td>@polkadot/api</td>
                    <td>^16.5.4</td>
                    <td>Polkadot SDK chain interaction</td>
                </tr>
                <tr>
                    <td>API Extensions</td>
                    <td>@polkadot/api-contract</td>
                    <td>^16.5.4</td>
                    <td>Smart contract interactions (future)</td>
                </tr>
                <tr>
                    <td>Utilities</td>
                    <td>@polkadot/util</td>
                    <td>^13.2.3</td>
                    <td>Crypto & formatting utilities</td>
                </tr>
                <tr>
                    <td>Crypto</td>
                    <td>@polkadot/util-crypto</td>
                    <td>^13.2.3</td>
                    <td>Address validation & hashing</td>
                </tr>
                <tr>
                    <td>Routing</td>
                    <td>react-router-dom</td>
                    <td>^6.26.0</td>
                    <td>Client-side navigation</td>
                </tr>
                <tr>
                    <td>State Management</td>
                    <td>React Context API</td>
                    <td>Built-in</td>
                    <td>Lightweight global state</td>
                </tr>
                <tr>
                    <td>Testing (Unit)</td>
                    <td>Vitest</td>
                    <td>^2.1.0</td>
                    <td>Fast unit testing</td>
                </tr>
                <tr>
                    <td>Testing (E2E)</td>
                    <td>Playwright</td>
                    <td>^1.48.0</td>
                    <td>Browser automation tests</td>
                </tr>
                <tr>
                    <td>Code Quality</td>
                    <td>ESLint</td>
                    <td>^9.13.0</td>
                    <td>Linting & code standards</td>
                </tr>
                <tr>
                    <td>Formatting</td>
                    <td>Prettier</td>
                    <td>^3.3.0</td>
                    <td>Code formatting</td>
                </tr>
                <tr>
                    <td>Containerization</td>
                    <td>Docker</td>
                    <td>26.x</td>
                    <td>Deployment container</td>
                </tr>
            </tbody>
        </table>

        <h2>📦 Complete package.json Specification</h2>
        <div class="code-block">
{
  "name": "polkadot-edu-dashboard",
  "version": "1.0.0",
  "description": "Educational dashboard for exploring Polkadot blockchain data and ecosystem",
  "type": "module",
  "author": "Your Name &lt;your.email@example.com&gt;",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/polkadot-edu-dashboard"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\"",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "type-check": "tsc --noEmit",
    "docker:build": "docker build -t polkadot-edu-dashboard .",
    "docker:run": "docker run -p 3000:80 polkadot-edu-dashboard"
  },
  "dependencies": {
    "@polkadot/api": "^16.5.4",
    "@polkadot/api-contract": "^16.5.4",
    "@polkadot/util": "^13.2.3",
    "@polkadot/util-crypto": "^13.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.48.0",
    "@types/node": "^22.7.4",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^8.8.0",
    "@typescript-eslint/parser": "^8.8.0",
    "@vitejs/plugin-react": "^4.3.2",
    "@vitest/ui": "^2.1.2",
    "eslint": "^9.13.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.37.1",
    "eslint-plugin-react-hooks": "^4.6.2",
    "prettier": "^3.3.3",
    "typescript": "^5.6.2",
    "vite": "^5.4.8",
    "vitest": "^2.1.2"
  },
  "engines": {
    "node": "&gt;=20.0.0",
    "npm": "&gt;=10.0.0"
  }
}
        </div>

        <h2>⚙️ Critical Configuration Files</h2>

        <h3>vite.config.ts <span class="priority-badge critical">CRITICAL</span></h3>
        <div class="code-block">
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'polkadot-api': ['@polkadot/api', '@polkadot/util', '@polkadot/util-crypto'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@polkadot/api', '@polkadot/util', '@polkadot/util-crypto'],
  },
});
        </div>

        <h3>tsconfig.json <span class="priority-badge critical">CRITICAL</span></h3>
        <div class="code-block">
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@services/*": ["./src/services/*"],
      "@types/*": ["./src/types/*"],
      "@utils/*": ["./src/utils/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
        </div>

        <h3>.env.example <span class="priority-badge high">HIGH</span></h3>
        <div class="code-block">
# Polkadot RPC Endpoints
# Public endpoints (use with rate limiting awareness)
VITE_POLKADOT_RPC_WSS=wss://rpc.polkadot.io
VITE_POLKADOT_RPC_HTTP=https://rpc.polkadot.io

# Alternative endpoints
# VITE_POLKADOT_RPC_WSS=wss://polkadot.api.onfinality.io/public-ws
# VITE_POLKADOT_RPC_WSS=wss://1rpc.io/dot

# Cache settings
VITE_CACHE_TTL=60000
VITE_MAX_CACHE_SIZE=100

# Feature flags
VITE_ENABLE_VALIDATOR_DETAILS=true
VITE_ENABLE_ADVANCED_STATS=false

# App configuration
VITE_APP_TITLE=Polkadot Educational Dashboard
VITE_REFRESH_INTERVAL=12000
        </div>

        <h3>Dockerfile <span class="priority-badge high">HIGH</span></h3>
        <div class="code-block">
# Multi-stage build for optimized production image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
        </div>

        <h2>🧩 Core Component Implementation Specifications</h2>

        <h3>1. PolkadotContext.tsx - API Connection Management <span class="priority-badge critical">CRITICAL</span></h3>
        <div class="spec-section">
            <strong>Purpose:</strong> Singleton API connection with automatic reconnection<br>
            <strong>State Management:</strong>
            <ul class="checklist">
                <li>API instance (ApiPromise | null)</li>
                <li>Connection status (connecting | connected | disconnected | error)</li>
                <li>Current chain info (name, version, token symbol)</li>
                <li>Error state with retry mechanism</li>
            </ul>
            <strong>Key Functions:</strong>
            <ul class="checklist">
                <li><code>connectToPolkadot()</code> - Initialize WSS connection with fallback</li>
                <li><code>disconnectFromPolkadot()</code> - Graceful shutdown</li>
                <li><code>subscribeToChainUpdates()</code> - Real-time chain head subscription</li>
                <li><code>handleConnectionError()</code> - Exponential backoff retry</li>
            </ul>
            <strong>Error Handling:</strong>
            <ul class="checklist">
                <li>Network timeout detection (30s)</li>
                <li>Automatic endpoint switching on failure</li>
                <li>User-friendly error messages</li>
            </ul>
        </div>

        <h3>2. useBlockData.ts - Real-Time Block Hook <span class="priority-badge critical">CRITICAL</span></h3>
        <div class="spec-section">
            <strong>Returns:</strong>
            <ul class="checklist">
                <li><code>currentBlock</code>: Latest block number</li>
                <li><code>blockHash</code>: Block hash string</li>
                <li><code>blockTime</code>: Timestamp</li>
                <li><code>extrinsicCount</code>: Number of transactions</li>
                <li><code>isLoading</code>: Boolean</li>
                <li><code>error</code>: Error | null</li>
            </ul>
            <strong>Implementation:</strong>
            <ul class="checklist">
                <li>Use <code>api.rpc.chain.subscribeNewHeads()</code></li>
                <li>Debounce updates (500ms) to prevent UI thrashing</li>
                <li>Cleanup subscriptions on unmount</li>
                <li>Cache last 10 blocks for activity feed</li>
            </ul>
        </div>

        <h3>3. BlockInfo Component Specification <span class="priority-badge high">HIGH</span></h3>
        <div class="spec-section">
            <strong>Display Requirements:</strong>
            <ul class="checklist">
                <li>Block number with comma formatting (e.g., 12,345,678)</li>
                <li>Block hash with truncation (0x1234...5678) and copy button</li>
                <li>Time elapsed since block (e.g., "5 seconds ago") with auto-update</li>
                <li>Extrinsic count with icon</li>
                <li>Visual pulse animation on new block</li>
            </ul>
            <strong>Styling:</strong>
            <ul class="checklist">
                <li>Card layout with gradient border on update</li>
                <li>Monospace font for hash</li>
                <li>Responsive grid for mobile</li>
            </ul>
        </div>

        <h3>4. ValidatorList Component Specification <span class="priority-badge medium">MEDIUM</span></h3>
        <div class="spec-section">
            <strong>Data Source:</strong> <code>api.query.staking.validators()</code><br>
            <strong>Display:</strong>
            <ul class="checklist">
                <li>Paginated table (20 validators per page)</li>
                <li>Columns: Address (truncated), Total Stake, Commission, Active Status</li>
                <li>Sort by stake (descending) by default</li>
                <li>Search by address (debounced 300ms)</li>
            </ul>
            <strong>Performance:</strong>
            <ul class="checklist">
                <li>Virtualized scrolling for 1000+ validators</li>
                <li>Client-side caching (5 minute TTL)</li>
            </ul>
        </div>

        <h2>📚 Educational Content Structure</h2>

        <h3>EDUCATIONAL_CONTENT.md Specification</h3>
        <div class="spec-section">
            <strong>Required Sections:</strong>
            <ol>
                <li><strong>What is Polkadot?</strong>
                    <ul>
                        <li>Multi-chain network explanation</li>
                        <li>Relay Chain vs Parachains diagram</li>
                        <li>Shared security model</li>
                    </ul>
                </li>
                <li><strong>Architecture Deep Dive</strong>
                    <ul>
                        <li>Nominated Proof-of-Stake (NPoS) mechanism</li>
                        <li>Cross-Consensus Messaging (XCM)</li>
                        <li>Substrate framework overview</li>
                    </ul>
                </li>
                <li><strong>Developer Onboarding</strong>
                    <ul>
                        <li>Polkadot.js API quickstart guide</li>
                        <li>Account creation tutorial</li>
                        <li>First transaction walkthrough</li>
                    </ul>
                </li>
                <li><strong>Ecosystem Resources</strong>
                    <ul>
                        <li>Official documentation links (docs.polkadot.com)</li>
                        <li>Substrate tutorials (substrate.io)</li>
                        <li>Community forums (polkadot.network/community)</li>
                        <li>Developer tools (polkadot.js.org)</li>
                    </ul>
                </li>
            </ol>
        </div>

        <h2>🚀 Deployment Configuration</h2>

        <h3>GitHub Actions CI/CD (.github/workflows/ci.yml)</h3>
        <div class="code-block">
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
        </div>

        <h3>nginx.conf (for Docker deployment)</h3>
        <div class="code-block">
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
        </div>

        <h2>📖 README.md Comprehensive Structure</h2>
        <div class="spec-section">
            <strong>Must Include:</strong>
            <ul class="checklist">
                <li>Project banner with logo</li>
                <li>Badges (build status, license, version)</li>
                <li>One-paragraph project description</li>
                <li>Features list with emojis</li>
                <li>Screenshot gallery (dashboard, educational page)</li>
                <li>Quick start (3 commands to run locally)</li>
                <li>Detailed installation steps</li>
                <li>Environment variable documentation</li>
                <li>Development workflow</li>
                <li>Testing instructions</li>
                <li>Docker deployment guide</li>
                <li>Vercel deployment button</li>
                <li>Architecture diagram</li>
                <li>Contributing guidelines</li>
                <li>License information</li>
                <li>Acknowledgments (Polkadot, grant program)</li>
            </ul>
        </div>

        <h2>✅ IDE Execution Validation Checklist</h2>
        <div class="alert">
            <strong>⚠️ IDE MUST VERIFY:</strong> Every file listed in structure is generated with complete implementation
        </div>

        <ul class="checklist">
            <li>All 75+ files from structure are created</li>
            <li>No placeholder comments like "// TODO" or "// Implement this"</li>
            <li>All imports resolve correctly (no red squiggles)</li>
            <li>TypeScript compiles without errors (<code>npm run type-check</code> passes)</li>
            <li>ESLint passes with 0 warnings (<code>npm run lint</code> clean)</li>
            <li>All tests have basic implementations and pass</li>
            <li>Environment variables documented in .env.example</li>
            <li>README includes actual screenshots placeholder sections</li>
            <li>Docker builds successfully (<code>docker build .</code> succeeds)</li>
            <li>Application runs locally (<code>npm run dev</code> starts without crash)</li>
            <li>API connects to Polkadot RPC endpoint on load</li>
            <li>Dashboard displays real block data within 10 seconds</li>
        </ul>

        <h2>🎯 One-Shot Execution Prompt for IDE</h2>
        <div class="success-box">
            <strong>FINAL INSTRUCTION TO IDE:</strong><br><br>
            Generate a complete, production-ready React + TypeScript project implementing the Polkadot Educational Dashboard according to ALL specifications above. Requirements:
            <ol>
                <li><strong>File Generation:</strong> Create every file in the structure with full implementation (no stubs)</li>
                <li><strong>Type Safety:</strong> All components strictly typed, no <code>any</code> types</li>
                <li><strong>API Integration:</strong> Functional Polkadot.js API connection with error handling</li>
                <li><strong>Real Data:</strong> All dashboard components fetch and display actual blockchain data</li>
                <li><strong>Testing:</strong> Minimum 10 unit tests and 3 E2E tests implemented</li>
                <li><strong>Documentation:</strong> All 5 markdown docs in <code>docs/</code> fully written</li>
                <li><strong>Deployment Ready:</strong> Working Dockerfile and CI/CD pipeline</li>
                <li><strong>Code Quality:</strong> ESLint/Prettier configured, all files formatted</li>
                <li><strong>Accessibility:</strong> WCAG 2.1 AA compliance (semantic HTML, ARIA labels)</li>
                <li><strong>Performance:</strong> Code splitting, lazy loading, optimized bundle size</li>
            </ol>
            <strong>Success Criteria:</strong> Developer can <code>git clone</code>, <code>npm install</code>, <code>npm run dev</code>, and see a functional dashboard with live Polkadot data in under 2 minutes.
        </div>

        <h2>🔐 Security & Compliance</h2>
        <div class="spec-section">
            <strong>Security Requirements:</strong>
            <ul class="checklist">
                <li>No private key storage (view-only application)</li>
                <li>Environment variables for all sensitive config</li>
                <li>HTTPS enforcement in production (nginx config)</li>
                <li>Content Security Policy headers</li>
                <li>Dependency vulnerability scanning (npm audit)</li>
                <li>CORS configuration for public RPC endpoints</li>
            </ul>
            <strong>EU AI Act Compliance:</strong>
            <ul class="checklist">
                <li>No AI/ML components (static educational content)</li>
                <li>Full transparency in data sources (RPC endpoints documented)</li>
                <li>No user data collection (no analytics by default)</li>
            </ul>
            <strong>License:</strong> MIT License with grant acknowledgment
        </div>

        <h2>📊 Performance Benchmarks</h2>
        <table>
            <thead>
                <tr>
                    <th>Metric</th>
                    <th>Target</th>
                    <th>Validation Method</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Initial Load Time</td>
                    <td>&lt; 3 seconds</td>
                    <td>Lighthouse Performance Score &gt; 90</td>
                </tr>
                <tr>
                    <td>API Connection</td>
                    <td>&lt; 5 seconds</td>
                    <td>Successful API ready state</td>
                </tr>
                <tr>
                    <td>Block Update Latency</td>
                    <td>&lt; 1 second</td>
                    <td>Subscription callback timing</td>
                </tr>
                <tr>
                    <td>Bundle Size</td>
                    <td>&lt; 500 KB (gzipped)</td>
                    <td>Webpack bundle analyzer</td>
                </tr>
                <tr>
                    <td>Accessibility</td>
                    <td>WCAG 2.1 AA</td>
                    <td>axe DevTools audit</td>
                </tr>
            </tbody>
        </table>

        <div class="alert">
            <strong>⚡ Critical Path Dependencies:</strong><br>
            1. PolkadotContext initialization → 2. API connection → 3. Block subscription → 4. Dashboard render<br>
            Any failure in chain must display user-friendly error with retry option.
        </div>

        <h2>🎓 Educational Content Guidelines</h2>
        <div class="spec-section">
            <strong>Content Principles (IEEE Ethically Aligned Design):</strong>
            <ul class="checklist">
                <li><strong>Accessibility:</strong> Explain technical concepts at undergraduate level</li>
                <li><strong>Inclusivity:</strong> Avoid blockchain jargon without definitions</li>
                <li><strong>Transparency:</strong> Cite all external sources (Polkadot Wiki, official docs)</li>
                <li><strong>Accuracy:</strong> Verify technical details against Polkadot documentation (2026)</li>
            </ul>
            <strong>Interactive Elements:</strong>
            <ul class="checklist">
                <li>Collapsible architecture diagrams</li>
                <li>Tooltip explanations for terms (validator, parachain, extrinsic)</li>
                <li>Code snippets with syntax highlighting</li>
                <li>External link icons for official resources</li>
            </ul>
        </div>

        <h2>🏁 Final Validation Protocol</h2>
        <div class="success-box">
            <strong>Pre-Commit Checklist (Auto-run via Git Hooks):</strong><br>
            <code>npm run format && npm run lint && npm run type-check && npm test && npm run build</code><br><br>
            <strong>Deployment Validation:</strong><br>
            <ol>
                <li>Build Docker image: <code>docker build -t polkadot-edu .</code></li>
                <li>Run container: <code>docker run -p 3000:80 polkadot-edu</code></li>
                <li>Open browser: <code>http://localhost:3000</code></li>
                <li>Verify: Live block data appears within 10 seconds</li>
                <li>Test: Navigate all pages, check responsive design (mobile/desktop)</li>
            </ol>
        </div>

        <div class="alert">
            <strong>🚨 MANDATORY IDE BEHAVIOR:</strong><br>
            Do NOT generate this specification document as the output. Generate the ACTUAL PROJECT FILES according to the structure above. Every file must contain complete, functional implementation code.
        </div>
    </div>

    <script>
        // Add timestamp
        document.addEventListener('DOMContentLoaded', function() {
            const date = new Date().toLocaleDateString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            console.log(`Specification generated on: ${date}`);
        });
    </script>
</body>
</html>
```

### **CANVAS_NEW_STR**

# **CANVAS_DESCRIPTION**

I've created a comprehensive, IDE-executable specification document for the Polkadot Educational Dashboard project. This 75+ file specification provides complete implementation guidance with:

**🎯 Key Enhancements for One-Shot IDE Execution:**

1. **Complete File Structure** - Every file explicitly listed with generation checkmarks
2. **Exact Version Pinning** - All dependencies specified with compatible versions (2026 standards)
3. **Full Configuration Files** - Vite, TypeScript, Docker, nginx, CI/CD pipelines
4. **Component Specifications** - Detailed behavioral requirements for each React component
5. **API Integration Blueprint** - Polkadot.js connection logic with error handling patterns
6. **Deployment Ready** - Docker multi-stage build, GitHub Actions, Vercel config
7. **Quality Gates** - ESLint, Prettier, Vitest, Playwright configurations
8. **Educational Content Framework** - Structured learning resources aligned with grant requirements
9. **Performance Benchmarks** - Measurable success criteria (Lighthouse scores, bundle size)
10. **Security & Compliance** - EU AI Act considerations, WCAG 2.1 AA accessibility

**Critical Differentiators from Original Prompt:**

✅ **Explicit over Implicit** - No assumptions; every file, function, and configuration specified  
✅ **Modern 2026 Stack** - Vite (not CRA), Vitest (not Jest), Playwright (not Cypress)  
✅ **Type-Safe Architecture** - Strict TypeScript with zero `any` types  
✅ **Production Patterns** - Error boundaries, retry logic, caching, code splitting  
✅ **Grant Compliance** - Educational focus, deployment demo, open-source licensing  

**IDE Validation Protocol:** The document includes a 12-point checklist ensuring generated code compiles, tests pass, Docker builds, and displays real Polkadot data on first run.

This specification transforms a conceptual prompt into a deterministic build instruction that any AI-powered IDE (Cursor, GitHub Copilot Workspace, v0.dev) can execute end-to-end without human intervention.