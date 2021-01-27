import { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import HeadQuiz from '../src/components/Head';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function sentName(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <>
      <HeadQuiz />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              A América é Rubro-Negra!
            </Widget.Header>
            <Widget.Content>
              <h1>Teste seus conhecimentos sobre o Flamengo de 2019</h1>
              <form onSubmit={sentName}>
                <input
                  type="text"
                  value={name}
                  autoCapitalize=""
                  min={3}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Diz aí seu nome pra jogar :)"
                />
                <button type="submit" disabled={name.length === 0}>
                  <span>Jogar</span>
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>Veja outros quizes incríveis</p>
              <ul>
                <li>Quiz 1</li>
                <li>Quiz 2</li>
                <li>Quiz 3</li>
              </ul>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/nathyts/flaquiz" />
      </QuizBackground>
    </>
  );
}
