'use client';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

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
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </NextThemesProvider>
          {/* <ThemeProvider>{children}</ThemeProvider> */}
        </Provider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
