import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import HeadQuiz from '../src/components/Head';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
          <QuizLogo />
          <Widget
            transition= {{ delay: 0, duration: 0.5}}
            as={motion.section}
            variants={{
              show: {opacity: 1, y: '0'},
              hidden: {opacity: 0, y: '100%'},
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              A América é Rubro-Negra!
            </Widget.Header>
            <Widget.Content>
              <h1>Teste seus conhecimentos sobre o Flamengo de 2019</h1>
              <form onSubmit={sentName}>
                <Input
                  name="usename"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Qual seu nome?"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget
           transition= {{ delay: 0, duration: 0.5}}
           as={motion.section}
           variants={{
             show: {opacity: 1},
             hidden: {opacity: 0},
           }}
           initial="hidden"
           animate="show"
          >
            <Widget.Content>
              <h1>Quizes da galera</h1>
              
              <ul>
                {db.external.map((link)=>{
                  const projectLink = link
                    // .replace(/\//g, '') //remove bars
                    .replace('https://', '')
                    .replace('.vercel.app/', '')
                  
                  return (
                    <li key={link}>
                      <Widget.Topic 
                        href={`quiz/${projectLink}`}
                        >
                        {projectLink}
                      </Widget.Topic>
                    </li>
                  )
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Footer
            transition= {{ delay: 0, duration: 1}}
            as={motion.section}
            variants={{
              show: {opacity: 1},
              hidden: {opacity: 0},
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/nathyts/flaquiz" />
      </QuizBackground>
    </>
  );
}
