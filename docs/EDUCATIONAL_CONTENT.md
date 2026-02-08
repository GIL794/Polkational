# Educational Content Strategy

The Polkadot Educational Dashboard is designed to serve as a practical learning tool for developers and enthusiasts interested in the Polkadot ecosystem.

## Educational Goals
1. **Visualizing Abstract Concepts**: Making the "Relay Chain" and "Parachain" model concrete through UI representation.
2. **Real-time Interaction**: Showing live data (blocks, validators) to demonstrate the liveness of the network.
3. **Code as Education**: The codebase itself is structured to be readable and instructive for developers learning how to build on Polkadot.

## Content Modules

### 1. Architecture Guide
*Located in: `src/components/education/ArchitectureGuide`*
- Explains the dual-structure of Relay Chain (security/consensus) and Parachains (application logic).
- Uses interactive collapsible sections to dive into details without overwhelming the user.

### 2. Validator Mechanism
*Located in: `src/components/dashboard/ValidatorList`*
- Demonstrates the NPoS (Nominated Proof of Stake) mechanism.
- Shows real validator data (commission, points) to explain how validators are incentivized.

### 3. Block Production
*Located in: `src/components/dashboard/BlockInfo`*
- Visualizes the 6-second block time.
- Explains what information is contained in a block header (extrinsics root, state root).

### 4. Curated Resources
*Located in: `src/components/education/ResourceLinks`*
- Provides a carefully selected list of high-quality external resources (Wiki, Docs, Tools).
- Categorized by type (Video, Doc, Tool) for easier navigation.

## Future Educational Features
- **Transaction Simulator**: A sandbox to construct transactions without signing them.
- **Staking Calculator**: Interactive tool to estimate staking rewards.
- **Governance Visualizer**: Timeline of active referenda and proposals.
