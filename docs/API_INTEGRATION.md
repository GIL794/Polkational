# Polkadot.js API Integration Guide

This document details how the Polkadot Educational Dashboard integrates with the Polkadot blockchain using the `@polkadot/api` library.

## Connection Management

### Singleton Client
We use a singleton pattern (`PolkadotClient` class) to manage the API instance. This ensures only one WebSocket connection is active at a time.

```typescript
// src/services/api/polkadotClient.ts
export class PolkadotClient {
  private static instance: PolkadotClient;
  private api: ApiPromise | null = null;

  public async connect(endpoint: string = 'wss://rpc.polkadot.io'): Promise<ApiPromise> {
    if (this.api && this.api.isConnected) {
      return this.api;
    }
    // ... connection logic
  }
}
```

### Context Provider
The `PolkadotProvider` wraps the application and handles the connection lifecycle.

```tsx
// src/contexts/PolkadotContext.tsx
const apiInstance = await polkadotClient.connect();
setApi(apiInstance);
```

## Data Fetching Patterns

### 1. One-time Queries
For data that doesn't change often (e.g., chain properties), we use standard async queries.

```typescript
// Example: Fetching chain properties
const chain = await api.rpc.system.chain();
const properties = api.registry.getChainProperties();
```

### 2. Subscriptions
For real-time data (e.g., new blocks), we use subscriptions. The API returns an unsubscribe function which must be called on cleanup.

```typescript
// Example: Subscribing to new block headers
const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
  console.log(`New block #${header.number}`);
  // Update state
});

// Cleanup
return () => unsubscribe();
```

### 3. Storage Queries
To access on-chain state (storage), we use `api.query`.

```typescript
// Example: Fetching active validators
const validatorIds = await api.query.staking.validators();
```

## Type Safety
We use TypeScript to ensure type safety when interacting with the API. However, Polkadot.js uses Codec types which often require casting or specific method calls (`.toString()`, `.toNumber()`, `.unwrapOr()`).

> **Note**: Be careful with `any` casts. Always verify the structure of the returned data from the Polkadot.js documentation or by inspecting the `type` definition in the API metadata.

## Best Practices Used
1. **Error Handling**: All API calls are wrapped in try-catch blocks.
2. **Caching**: Expensive calls (like fetching all validators) are cached in memory to prevent rate limiting and improve UI responsiveness.
3. **Lazy Loading**: We only fetch detailed data (like validator exposure) when necessary.
