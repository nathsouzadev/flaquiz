import Head from 'next/head'

const HeadQuiz = () => {
    return(
        <>
            <Head>
                <title>FlaQuiz</title>
                <meta property="og:title" content="FlaQuiz" key="title" />
            </Head>
            <Head>
                <meta property="og:image" content="https://wallpapercave.com/wp/wp4979117.jpg" key="image"/>
            </Head>
            <Head>
                <meta property="og:image" content="https://wallpapercave.com/wp/wp4979117.jpg" key="image"/>
            </Head>
            <Head>
                <meta property="og:image:type" content="image/jpg" key="type"/>
            </Head>
            <Head>
                <meta property="og:image:width" content="800" key="width"/>
            </Head>
            <Head>
                <meta property="og:image:height" content="600" key="height"/>
            </Head>
        </>
    )
}

export default HeadQuiz;
