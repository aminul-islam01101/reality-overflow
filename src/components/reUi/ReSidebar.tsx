import { TChildrenClassProps } from '@/types';

const ReSidebar = ({ children, classModifier }: TChildrenClassProps) => {
  return (
    <section
      className={`background-light900_dark200 light-border custom-scrollbar sticky top-0 flex h-screen  flex-col overflow-y-auto  p-6 pt-36 shadow-light-300 dark:shadow-none  ${classModifier}`}
    >
      {children}
    </section>
  );
};

export default ReSidebar;
