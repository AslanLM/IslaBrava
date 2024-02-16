import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/landing/Landing'

function App() {

  useEffect(()=>{
    window.addEventListener("beforeunload", function () {
      history.scrollRestoration = "manual";
      history.go(-history.length);
      // window.scrollTo(0, 0); otra manera de hacerlo
    });
  }, [])

  return (
    <>
      <Header/>
      <Landing/>
      <Footer/>

      
    </>
  )
}

export default App
