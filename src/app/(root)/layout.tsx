import React from 'react';

import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/view/shared/navbar/Navbar';
import LeftSidebar from '@/components/view/shared/LeftSidebar';
import RightSidebar from '@/components/view/shared/RightSidebar';
import Footer from '@/components/view/shared/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        <RightSidebar />
      </div>
      {/* <Footer/> */}
    </main>
  );
};

export default Layout;
