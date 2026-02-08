import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '@/components/common/Card/Card';
import { formatAddress } from '@/utils/formatters';

describe('Card Component', () => {
  it('renders title and children', () => {
    render(<Card title="Test Title">Test Content</Card>);
    expect(screen.getByText('Test Title')).toBeDefined();
    expect(screen.getByText('Test Content')).toBeDefined();
  });
});

describe('Utils', () => {
  it('formats address correctly', () => {
    const address = '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5';
    expect(formatAddress(address)).toBe('15oF4u...Hr6Sp5');
  });
});
