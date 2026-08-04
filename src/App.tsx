import { About } from './components/About/About'
import { CloudField } from './components/CloudField/CloudField'
import { Contact } from './components/Contact/Contact'
import { CursorSparkles } from './components/CursorSparkles/CursorSparkles'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { SparkleField } from './components/SparkleField/SparkleField'
import './styles/shared.css'

function App() {
  return (
    <div className="app">
      <CloudField />
      <SparkleField />
      <CursorSparkles />
      <Header />
      <main className="app__main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
