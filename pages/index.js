import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

const BackgroundImg = styled.div`
  background-image:linear-gradient(rgba(100, 10, 20, 0.7),rgba(56, 55, 54, 0.2)), url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            A América é Rubro-Negra!
          </Widget.Header>
          <Widget.Content>
            <h1>Você sabe tudo sobre o time campeão da Libertadores de 2019?</h1>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Você sabe tudo sobre o time campeão da Libertadores de 2019?</h1>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}
