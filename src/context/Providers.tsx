'use client';
import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from './ThemeProvider';

import { store } from '@/redux/store';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {' '}
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: 'primary-gradient',
            footerActionLink: 'primary-text-gradient hover:text-primary-500',
          },
        }}
      >
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
