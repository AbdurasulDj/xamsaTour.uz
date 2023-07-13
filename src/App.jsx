import React from 'react'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Explore from './components/Explore/Explore.jsx'
import Services from './components/Services/Services.jsx'
import BuyForm from './components/BuyForm/BuyForm.jsx'
import GetInTouch from './components/GetInTouch/GetInTouch.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [ selectedPrice, setSelectedPrice ] = React.useState(0)

  return (
    <div className="App">
      <Header />
      <About />
      <Explore setSelectedPrice={setSelectedPrice}/>
      <Services />
      <BuyForm price={selectedPrice}/>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
