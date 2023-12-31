import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import GlobalSearch from '../search/GlobalSearch';

import MobileNav from './MobileNav';
import Theme from './Theme';

import NoSSRWrapper from '@/components/ui-utils/NoSSRWrapper';

const Navbar = () => {
  return (
    <nav className=" background-light900_dark200 fixed z-50 w-full gap-5 px-6 py-2 shadow-sm dark:shadow-lg sm:px-12">
      <div className="flex-between mx-auto lg:max-w-screen-xl  ">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/images/site-logo.svg" width={23} height={23} alt="DevFlow" />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Reality <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <GlobalSearch />
        <div className="flex-between gap-5">
          <NoSSRWrapper>
            <Theme />
          </NoSSRWrapper>
          {/* <NoSSRWrapper>
            <ThemeSwitcher />
          </NoSSRWrapper> */}
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                },
                variables: {
                  colorPrimary: '#ff7000',
                },
              }}
            />
          </SignedIn>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
