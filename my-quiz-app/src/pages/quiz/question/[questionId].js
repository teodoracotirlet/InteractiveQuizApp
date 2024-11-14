import { useState } from 'react';
import fs from 'fs';
import path from 'path';

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'questions.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const questionData = jsonData[params.questionId];

  return {
    props: {
      questionData,
      quizId: params.quizId,
      questionId: params.questionId
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [], // Add your logic to generate paths if needed
    fallback: 'blocking',
  };
}

export default function Question({ questionData, quizId, questionId }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNext, setShowNext] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === questionData.answer);
    setShowNext(true);
  };

  return (
    <div>
      <h1>Întrebarea {questionId} din Quiz-ul {quizId}</h1>
      <p>{questionData.question}</p>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
      {selectedAnswer && (
        <p>{isCorrect ? "Corect!" : `Greșit! Răspunsul corect este ${questionData.answer}.`}</p>
      )}
      {showNext && (
        <button>
          <a href={`/quiz/${quizId}/question/${parseInt(questionId) + 1}`}>Următoarea Întrebare</a>
        </button>
      )}
    </div>
  );
}
