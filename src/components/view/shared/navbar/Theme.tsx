'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { themes } from '@/constants';

const Theme = () => {
  const { theme, setTheme } = useTheme();
  console.log('🌼 🔥🔥 file: Theme.tsx:19 🔥🔥 Theme 🔥🔥 theme🌼', theme);

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {theme === 'light' ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
          {/* <Image
            src="/assets/icons/sun.svg"
            alt="sun"
            width={20}
            height={20}
            className="active-theme"
          /> */}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            // @ts-ignore
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setTheme(item.value);
                if (item.value !== 'system') {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${theme === item.value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  theme === item.value ? 'text-primary-500' : 'text-dark100_light900'
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300"        >
          <DropdownMenuItem
            className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            onClick={() => setTheme('light')}
          >
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />{' '}
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            onClick={() => setTheme('dark')}
          >
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />{' '}
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            onClick={() => setTheme('system')}
          >
            <Image
              src="/assets/icons/computer.svg"
              alt="computer"
              width={20}
              height={20}
              className="active-theme"
            />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </Menubar>
  );
};

export default Theme;
