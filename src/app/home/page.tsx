import React, { useEffect } from 'react'
import Navbar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import TextSection from '@/components/TextSection'

import 'animate.css/animate.compat.css'
import CustomCursor from '@/components/CustomCursor'
import { useSelector, useDispatch } from 'react-redux'
import { selectLanguage, setLanguage, setDictionary } from '@/slice/language'
import { getDictionary } from './../../get-dictionary'
import { Locale } from '../../i18n-config'

function Home() {
  const dispatch = useDispatch()
  const lan = useSelector(selectLanguage)

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const dictionary = await getDictionary(lan)
        dispatch(setDictionary(dictionary))
      } catch (error) {
        console.error('Error fetching dictionary:', error)
      }
    }

    fetchDictionary()
  }, [dispatch, lan])

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Banner />
      <TextSection />
      <Services />
      <Marquee></Marquee>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
