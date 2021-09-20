import type { FC } from 'react'
import './index.css'
import { Title } from './components/atoms/title/Title'
import { Subtitle } from './components/atoms/title/Subtitle'
import { Card, CardProps } from './components/molecules/card/Card'
import { Grid } from './components/organisms/grid/Grid'
import { Footer } from './components/molecules/footer/Footer'
import styled from 'styled-components'

const listadoCards: CardProps[] = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation',
    text: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn',
    text: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/ex',
    title: 'Examples',
    text: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy',
    text: 'Instantly deploy your Next.js site to a public URL with Vercel."',
  },
]

const ContainerStyled = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainStyled = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: FC = () => {
  return (
    <ContainerStyled>

      <MainStyled>
        <Title url="https://nextjs.org" projectName="Next.js" />
        <Subtitle codedText="pages/index.js"/>
        <Grid>
          {
            listadoCards.map((x, i) => (
              <Card key={`item_${x.title}`} 
                    href={x.href} 
                    text={x.text} 
                    title={x.title} />
            ))
          }
        </Grid>
      </MainStyled>

      <Footer />
    </ContainerStyled>
  )
}

export default App;
