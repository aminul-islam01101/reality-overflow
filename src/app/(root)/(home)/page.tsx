import { auth } from '@clerk/nextjs';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import { getQuestions, getRecommendedQuestions } from '@/lib/actions/question.action';
import { SearchParamsProps } from '@/types';
import LocalSearchbar from '@/components/view/shared/search/LocalSearchbar';
import Filter from '@/components/view/shared/Filter';
import HomeFilters from '@/components/view/home/HomeFilters';
import QuestionCard from '@/components/view/cards/QuestionCard';
import NoResult from '@/components/view/shared/NoResult';
import Pagination from '@/components/view/shared/Pagination';

export default async function Home({ searchParams }: SearchParamsProps) {
  const { userId } = auth();
  let result;
  if (searchParams?.filter === 'recommended') {
    if (userId) {
      result = await getRecommendedQuestions({
        userId,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
      });
    } else {
      result = {
        questions: [],
        isNext: false,
      };
    }
  } else {
    result = await getQuestions({
      searchQuery: searchParams.q,
      filter: searchParams.filter,
      page: searchParams.page ? +searchParams.page : 1,
    });
  }

  return (
    <>
      <div className=" flex flex-col justify-between  min-h-[70vh]">
        <div>
          <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
            <h1 className="h1-bold text-dark100_light900">All Questions all </h1>
            <Link href="/ask-question" className="flex justify-end max-sm:w-full">
              <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
                Ask a Question
              </Button>
            </Link>
          </div>
          <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
            <LocalSearchbar
              route="/"
              iconPosition="left"
              imgSrc="/assets/icons/search.svg"
              placeholder="Search for questions"
              otherClasses="flex-1"
            />
            <Filter
              filters={HomePageFilters}
              otherClasses="min-h-[56px] sm:min-w-[170px]"
              containerClasses="hidden max-md:flex"
            />
          </div>
          <HomeFilters />
          <div className="mt-10 flex w-full flex-col gap-6 mb-20">
            {result?.questions?.length > 0 ? (
              result?.questions.map((question) => (
                <QuestionCard
                  key={question._id}
                  _id={question._id}
                  title={question.title}
                  tags={question.tags}
                  author={question.author}
                  upvotes={question.upvotes}
                  views={question.views}
                  answers={question.answers}
                  createdAt={question.createdAt}
                />
              ))
            ) : (
              <NoResult
                title="There’s no question to show"
                description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
                link="/ask-question"
                linkTitle="Ask a Question"
              />
            )}
          </div>
        </div>
        <div>
          <Pagination
            pageNumber={searchParams?.page ? +searchParams.page : 1}
            isNext={result?.isNext}
          />
        </div>
      </div>
    </>
  );
}
