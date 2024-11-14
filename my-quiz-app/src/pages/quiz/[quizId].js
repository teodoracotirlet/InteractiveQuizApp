import { useRouter } from 'next/router';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  return {
    props: { quizId: params.quizId }
  };
}

export async function getStaticPaths() {
  return {
    paths: [], // Generate paths if needed
    fallback: 'blocking',
  };
}

export default function Quiz({ quizId }) {
  return (
    <div>
      <h1>Quiz-ul {quizId}</h1>
      <Link href={`/quiz/${quizId}/question/1`}>
        <a>Începe Quiz-ul</a>
      </Link>
    </div>
  );
}
