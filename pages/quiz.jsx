import HeadQuiz from '../src/components/Head';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import db from '../db.json';

export default function QuizPage() {
  return (
    <div>
      <HeadQuiz />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              A América é Rubro-Negra!
            </Widget.Header>
            <Widget.Content>
              Bem vindo ao quiz
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/nathyts/flaquiz" />
      </QuizBackground>
    </div>
  );
}
