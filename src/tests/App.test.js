import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  it('should show loading header by default', () => {
    const appComponent = render(<App />);
    const loadingMessage = appComponent.getByRole('heading');
    expect(loadingMessage.textContent).toBe('Grabbing Quote...');
  });
});
