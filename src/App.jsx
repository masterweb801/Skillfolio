import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <section className='h-screen'></section>
      <section className='h-screen'></section>
      <section className='h-screen'></section>
    </div>
  )
}

export default App