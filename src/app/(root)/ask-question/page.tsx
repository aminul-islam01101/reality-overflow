import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { getUserById } from '@/lib/actions/user.action';
import Question from '@/components/view/forms/Question';

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });
  console.log('🌼 🔥🔥 file: page.tsx:13 🔥🔥 Page 🔥🔥 mongoUser🌼', mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
