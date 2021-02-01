import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGalera({dbOut}){
    return(
        <ThemeProvider theme={dbOut.theme}>
            Quiz da galera
            <QuizScreen
                outQuestions={dbOut.questions}
                outBg ={dbOut.bg}
            />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context){
    const projectUrl = context.query.id
    try {
        const dbOut = await fetch(`https://${projectUrl}.vercel.app/api/db`)
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            throw new Error('Failed to catch data');
        })
        .then((resObj) => resObj)

        return {
            props: {
                dbOut,
            },
        };
    } catch (err) {
        throw new Error(err);
    }
}
