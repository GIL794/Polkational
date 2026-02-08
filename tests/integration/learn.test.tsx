import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Learn from '@/pages/Learn/Learn';

// Mock child components to isolate Learn page testing
vi.mock('@/components/education/ArchitectureGuide/ArchitectureGuide', () => ({
  default: () => <div data-testid="architecture-guide">Architecture Guide Component</div>
}));

vi.mock('@/components/education/TutorialCard/TutorialCard', () => ({
  default: (props: any) => <div data-testid="tutorial-card">{props.title}</div>
}));

vi.mock('@/components/education/ResourceLinks/ResourceLinks', () => ({
  default: () => <div data-testid="resource-links">Resource Links Component</div>
}));

// We don't mock Quiz completely because we want to test the interaction with it, 
// but we might need to mock if it had complex internal state or dependencies.
// For now, let's test the real Quiz component integration.

describe('Learn Page', () => {
  it('renders all main sections', () => {
    render(<Learn />);
    
    expect(screen.getByText('Network Architecture')).toBeDefined();
    expect(screen.getByText('Interactive Tutorials')).toBeDefined();
    expect(screen.getByText('Polkadot Glossary')).toBeDefined();
    expect(screen.getByText('Extra Learning')).toBeDefined();
    expect(screen.getByText('Additional Resources')).toBeDefined();
  });

  it('renders the architecture guide', () => {
    render(<Learn />);
    expect(screen.getByTestId('architecture-guide')).toBeDefined();
  });

  it('renders the quiz selection list', () => {
    render(<Learn />);
    // Check for quiz titles
    expect(screen.getByText('Polkadot Architecture Basics')).toBeDefined();
    expect(screen.getByText('Consensus & Staking (NPoS)')).toBeDefined();
    expect(screen.getByText('XCM & Interoperability')).toBeDefined();
  });

  it('allows starting a quiz and interacting with it', () => {
    render(<Learn />);
    
    // Find and click "Start Quiz" for the first quiz
    const startButtons = screen.getAllByText('Start Quiz');
    fireEvent.click(startButtons[0]);

    // Check for the first question of the selected quiz
    expect(screen.getByText(/What is the primary function of the Relay Chain/i)).toBeDefined();
    
    // Find options for the first question
    const correctOption = screen.getByText('To provide shared security and consensus for the network');
    
    // Click the correct option
    fireEvent.click(correctOption);
    
    // Click submit
    const submitButton = screen.getByText('Submit Answer');
    fireEvent.click(submitButton);
    
    // Check for success feedback
    expect(screen.getByText('Correct!')).toBeDefined();
    
    // Check for next button
    expect(screen.getByText('Next Question')).toBeDefined();

    // Check for Exit button
    const exitButton = screen.getByText('Exit Quiz');
    fireEvent.click(exitButton);

    // Should be back to selection list
    expect(screen.getByText('Polkadot Architecture Basics')).toBeDefined();
  });
});
