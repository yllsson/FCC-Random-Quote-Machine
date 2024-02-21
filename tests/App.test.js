import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  it('should show loading header by default', () => {
    const appComponent = render(<App />);
    const loadingMessage = appComponent.getByRole('heading');
    expect(loadingMessage.textContent).toBe('Grabbing Quote...');
  });

  // Seems like I'm wanting to test state when React-Testing-Library seems to think it should not be tested...?
  // it('should display an error if there is an error', () => {
  //   const error = `Oh darn, there's an error!`;
  //   const { getByText } = render(<App error={error} isPending={false} />);
  //   const header = getByText(/Error:/i);
  //   console.log(header);
  //   expect(header.textContent).toBe(`Error: ${error}`);
  // });
});
