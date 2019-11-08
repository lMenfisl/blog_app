import React from 'react';
import Footer from '../static/Footer';
import Header from '../static/Header';
import Router from '../Router';
import './style.scss'


function App() {

  return (
    <div className="app">
      <Header />
      <main className="page">
        <Router />
      </main>
      <Footer />
    </div>
  )
}

export default App