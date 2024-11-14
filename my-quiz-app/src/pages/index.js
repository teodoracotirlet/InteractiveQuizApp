import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bun venit la Quiz-ul nostru!</h1>
      <Link href="/categories">
        <a>Vezi categoriile de quiz-uri</a>
      </Link>
    </div>
  );
}
