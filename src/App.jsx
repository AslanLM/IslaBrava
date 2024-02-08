import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import NewProducts from './components/NewProducts'
import Info from './components/Info'
import Category from './components/Category'
import PreFooter from './components/preFooter'
import Footer from './components/Footer'

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
      <Hero/>
      <main>
      <NewProducts/>
      <Info/>
      <Category/>
      <PreFooter/>
      <Footer/>
      </main>
    </>
  )
}

export default App
