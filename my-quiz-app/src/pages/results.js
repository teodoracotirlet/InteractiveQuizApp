import { useRouter } from 'next/router';

export default function QuizResults({ totalQuestions, correctAnswers }) {
  return (
    <div>
      <h2>Rezultatele Tale</h2>
      <p>Total întrebări: {totalQuestions}</p>
      <p>Răspunsuri corecte: {correctAnswers}</p>
      <p>{correctAnswers > totalQuestions / 2 ? "Bravo!" : "Mai încearcă!"}</p>
    </div>
  );
}
