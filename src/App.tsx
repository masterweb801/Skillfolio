import { useLenis } from "./hooks/useLenis";
import Hero from "./pages/Hero";

function App() {
  useLenis();

  return (
    <main>
      <Hero />
    </main>
  )
}

export default App
