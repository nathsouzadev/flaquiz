import { useState, useEffect } from 'react';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativeForm from '../../components/AlternativeForm';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

function ResultWidget({ results }){
  return(
    <Widget>
      <Widget.Header>
        Loading results...
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {result.reduce((somaAtual, resAtual)=> {
            if(resAtual) {
              return somaAtual++
            }
            return somaAtual;
          }, 0)} */}
          {results.filter((res) => res).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((res, index) => (
            <li key={`res_${res}`}>
              #{index + 1}
              {res === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  )
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Prepare-se
      </Widget.Header>
      <Widget.Content>
        <img src="https://media.giphy.com/media/Vx8MSphrScTAc/giphy.gif"/>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  question,
  totalQuestions,
  questionIndex,
  onSubmit, addResult
}) {
  const questionId = `question__${questionIndex}`;
  const [selected, setSelected] = useState(undefined);
  const [isQuestionSubmit, setIsQuestionSubmit] = useState(false);
  const isCorrect = selected === question.answer;
  const hasAlternativeSelected = selected !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/"/>
        <h3>
          Pergunta {questionIndex + 1} de {totalQuestions}
        </h3>
      </Widget.Header>
      <img
        alt="descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativeForm
          onSubmit={(e) =>{
          e.preventDefault();
          setIsQuestionSubmit(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmit(false);
            setSelected(undefined);
          }, 3000);
        }}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selected === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmit && alternativeStatus}
              >
                <input 
                  style={{ display: 'none' }}
                  name={questionId}
                  id={alternativeId}
                  onChange={() => setSelected(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage({ outQuestions, outBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [results, setResults] = useState([]);
  const totalQuestions = outQuestions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const questionIndex = currentIndex;
  const question = outQuestions[questionIndex];

  function addResult(result){
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1
    nextQuestion < totalQuestions ? setCurrentIndex(nextQuestion) : setScreenState(screenStates.RESULT)
  }

  return (
    <div>
      <QuizBackground backgroundImage={outBg}>
        <QuizContainer> 
          <QuizLogo />       
          {screenState === screenStates.QUIZ && 
            (
              <QuestionWidget
                question={question}
                questionIndex = {questionIndex}
                totalQuestions = {totalQuestions}
                onSubmit = {handleSubmit}
                addResult={addResult}
              />
            )
          }

          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/nathyts/flaquiz" />
      </QuizBackground>
    </div>
  );
}
