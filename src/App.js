import React , { useState } from 'react'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

import InputContext from './context/input-context'

const App = () => {
  const [inputValue , setInputValue] = useState(null)
  const handleForm = value => setInputValue(value)

  return (
    <div className='container mx-auto'>
      <InputContext.Provider value={inputValue}>
        <Header userSearch={handleForm}/>
        <Main/>
        <Footer/>
      </InputContext.Provider>
    </div>
  )
}

export default App