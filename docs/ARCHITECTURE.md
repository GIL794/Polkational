# Application Architecture

## Overview
Polkadot Educational Dashboard is a React-based Single Page Application (SPA) designed to interact with the Polkadot blockchain. It uses the Polkadot.js API to fetch real-time data and provides an educational interface for users to understand network mechanics.

## Tech Stack
- **Frontend Framework**: React 18+
- **Language**: TypeScript 5+
- **Build Tool**: Vite 5+
- **Blockchain Interaction**: Polkadot.js API (@polkadot/api)
- **Styling**: CSS Modules with CSS Variables
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Testing**: Vitest + React Testing Library

## Directory Structure
```
src/
├── components/       # UI Components
│   ├── common/       # Reusable components (Card, Header, etc.)
│   ├── dashboard/    # Dashboard-specific components (BlockInfo, ValidatorList, etc.)
│   └── education/    # Educational components (TutorialCard, ArchitectureGuide, etc.)
├── contexts/         # React Contexts (PolkadotContext, ThemeContext)
├── hooks/            # Custom Hooks (usePolkadotApi, useBlockData, etc.)
├── pages/            # Page components (Dashboard, Learn, About)
├── services/         # Business logic and API calls
│   ├── api/          # Polkadot API services
│   └── cache/        # In-memory caching
├── types/            # TypeScript definitions
├── utils/            # Helper functions and constants
└── assets/           # Static assets (images, styles)
```

## Key Components

### PolkadotContext
The core of the application's state. It manages the connection to the Polkadot WebSocket RPC node.
- **Provider**: `PolkadotProvider`
- **Hook**: `usePolkadotApi`
- **Responsibilities**:
  - Connect/Disconnect to node
  - Handle connection status (connecting, connected, error)
  - Provide `ApiPromise` instance to child components

### Services Layer
Decouples UI from API implementation.
- `polkadotClient.ts`: Singleton wrapper for `ApiPromise`.
- `blockService.ts`: Fetches block data and subscribes to new heads.
- `validatorService.ts`: Fetches staking and validator information.
- `networkService.ts`: Fetches chain properties (token symbol, decimals).

### Caching Strategy
To reduce RPC calls and improve performance, simple in-memory caching is implemented in `dataCache.ts`.
- Validates data based on TTL (Time To Live).
- LRU (Least Recently Used) eviction policy for size management.

## Data Flow
1. **Initialization**: App starts, `PolkadotProvider` initiates connection to `wss://rpc.polkadot.io`.
2. **Data Fetching**: Components use custom hooks (e.g., `useBlockData`) which call services.
3. **Services**: Services check cache -> call Polkadot API -> return data.
4. **Updates**: Subscriptions (e.g., `api.rpc.chain.subscribeNewHeads`) push updates to components.

## Educational Design
The application is structured to not just show data, but explain *what* the data means.
- **ArchitectureGuide**: Visualizes the Relay Chain / Parachain model.
- **TutorialCard**: Links to official documentation with difficulty levels.
- **Code Comments**: Critical code paths include comments explaining Polkadot-specific concepts.
