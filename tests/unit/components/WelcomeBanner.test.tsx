import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner/WelcomeBanner';

describe('WelcomeBanner', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders correctly when not dismissed', () => {
    render(<WelcomeBanner />);
    expect(screen.getByText(/Welcome to the Polkadot Educational Dashboard/i)).toBeDefined();
  });

  it('does not render if previously dismissed', () => {
    localStorage.setItem('hideWelcomeBanner', 'true');
    render(<WelcomeBanner />);
    expect(screen.queryByText(/Welcome to the Polkadot Educational Dashboard/i)).toBeNull();
  });

  it('hides when close button is clicked', () => {
    render(<WelcomeBanner />);
    
    const closeButton = screen.getByLabelText('Close welcome banner');
    fireEvent.click(closeButton);
    
    expect(screen.queryByText(/Welcome to the Polkadot Educational Dashboard/i)).toBeNull();
    expect(localStorage.getItem('hideWelcomeBanner')).toBe('true');
  });
});
