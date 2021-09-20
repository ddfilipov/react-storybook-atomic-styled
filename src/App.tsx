import type { FC } from 'react'
import './index.css'
import { Header } from './components/atoms/title/Title'
import { Subheader } from './components/atoms/title/Subtitle'
import { Card, CardProps } from './components/molecules/card/Card'
import { Grid } from './components/organisms/grid/Grid'
import { Footer } from './components/organisms/footer/Footer'

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

const App: FC = () => {
  return (
    <div className={`container`}>

      <main className={`main`}>
        <Header url="https://nextjs.org" projectName="Next.js" />
        <Subheader codedText="pages/index.js"/>
        <Grid>
          {
            listadoCards.map((x, i) => (
              <Card key={`item_${x.title}`} href={x.href} text={x.text} title={x.title} />
            ))
          }
        </Grid>
      </main>

      <Footer />
    </div>
  )
}

export default App;
