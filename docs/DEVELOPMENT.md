# Development Guide

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Polkational
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *Note: If you encounter peer dependency issues, use `npm install --legacy-peer-deps`.*

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to view the app.

## Available Scripts

- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run test`: Runs unit tests with Vitest.
- `npm run preview`: Locally preview the production build.

## Code Quality Standards

- **Linting**: We use ESLint with a strict configuration (including TypeScript and React Hooks rules). Ensure `npm run lint` passes before committing.
- **Formatting**: Code should be formatted consistently.
- **Testing**: Write unit tests for new components and utility functions.

## Project Structure

- `src/components`: UI components. Use `common` for generic components and specific folders for feature-based components.
- `src/hooks`: Custom React hooks.
- `src/services`: API logic and data fetching.
- `src/contexts`: Global state providers.

## Adding New Features

1. **Plan**: Identify which components and services are needed.
2. **Service**: If data is needed from Polkadot, add a function in `src/services/api/`.
3. **Hook**: Create a custom hook to consume the service and manage state.
4. **Component**: Build the UI component.
5. **Test**: Add tests in `tests/`.
