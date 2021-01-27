import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import HeadQuiz from '../src/components/Head';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

const InputName = styled.input`
    width: 100%;
    type: text;
    max-width: 350px;
    height: 38px;
      @media screen and (max-width: 500px){
        margin: auto;
        padding: 15px;
      }
`;

const ButtonForm = styled.button`
    display: flex;
    justify-content: flex-center;
    width: 100%;
    align-items: center;
    margin-top: 18px;
    border-radius: 5px;
    height: 38px;

    * {
      margin: 0;
    }
`;

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
                <InputName placeholder="Qual seu nome?" value={name} onChange={(e) => setName(e.target.value)} />
                <ButtonForm type="submit" disabled={name.length === 0}>
                  Jogar
                </ButtonForm>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Teste seus conhecimentos sobre o hitórico time do Flamengo</h1>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/nathyts/flaquiz" />
      </QuizBackground>
    </>
  );
}
