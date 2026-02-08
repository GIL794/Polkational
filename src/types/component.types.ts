import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface CardProps extends BaseProps {
  title?: string;
  loading?: boolean;
  error?: Error | null;
  footer?: ReactNode;
}

export interface TutorialCardProps extends BaseProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  tags: string[] | readonly string[];
  link?: string;
}

export interface HeaderProps extends BaseProps {
  onMenuToggle?: () => void;
}
