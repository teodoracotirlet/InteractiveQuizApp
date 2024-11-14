import Link from 'next/link';

const categories = [
  { id: 1, name: 'Cultură Generală' },
  { id: 2, name: 'Istorie' },
  { id: 3, name: 'Știință' },
];

export default function Categories() {
  return (
    <div>
      <h1>Categorii de Quiz-uri</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/quiz/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
