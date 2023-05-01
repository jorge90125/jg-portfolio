import './App.css'
import React, { useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Contact from './components/Contact'
import BeatTheBullyProject from './components/BeatTheBullyProject'
import MyCartProject from './components/MyCartProject'
import PortfolioProject from './components/PortfolioProject'
import StaxOnStaxProject from './components/StaxOnStaxProject'
import StreaminProject from './components/StreaminProject'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
library.add(faSquareGithub, faLinkedin)
library.add(faAngleDown, faAngleUp, faGamepad)
library.add(faEnvelope)

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <div class="bg-blue1 min-h-screen">
      <Nav />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/beatthebully' element={<BeatTheBullyProject />} />
        <Route path='/mycart' element={<MyCartProject />} />
        <Route path='/portfolio' element={<PortfolioProject />} />
        <Route path='/staxonstax' element={<StaxOnStaxProject />} />
        <Route path='/streamin' element={<StreaminProject />} />
      </Routes>
    </div>
  )
}

export default App;
