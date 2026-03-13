import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Library from './library';
import './App.css'

function App() {
  const books = [
    { id: 1, name: 'The Great Gatsby', price: 10.99 },
    { id: 1, name: 'The vue book', price: 11.99 },
    { id: 1, name: 'The react nbook', price: 12.99 },
    { id: 1, name: 'The book book', price: 12.99 },
  ];



  return (
    <>

      <h1>React core concept</h1>
      <Library books={books}></Library>





    </>
  )
}

export default App
