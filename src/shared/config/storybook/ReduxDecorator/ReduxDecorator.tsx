import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

export const ReduxDecorator = (story: () => Story) => (
  <StoreProvider>
    {story()}
  </StoreProvider>
);
