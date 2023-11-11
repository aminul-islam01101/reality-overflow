import type { Metadata } from 'next';
import Link from 'next/link';

import UserCard from '@/components/view/cards/UserCard';
import Filter from '@/components/view/shared/Filter';
import Pagination from '@/components/view/shared/Pagination';
import LocalSearchbar from '@/components/view/shared/search/LocalSearchbar';
import { UserFilters } from '@/constants/filters';
import { getAllUsers } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';

export const metadata: Metadata = {
  title: 'Community | Dev Overflow',
};

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />

        <Filter filters={UserFilters} otherClasses="min-h-[56px] sm:min-w-[170px]" />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => (
            <Link
              key={user._id}
              href={`/profile/${user.clerkId}`}
              className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
            >
              {' '}
              <UserCard user={user} />{' '}
            </Link>
          ))
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Join to be the first!
            </Link>
          </div>
        )}
      </section>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Page;
