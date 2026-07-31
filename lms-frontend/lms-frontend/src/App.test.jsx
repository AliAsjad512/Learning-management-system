import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('renders the LMS heading', () => {
    render(<App />);
    expect(screen.getByText('LMS')).toBeInTheDocument();
  });
});
