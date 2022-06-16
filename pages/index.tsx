import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import EventDetails from '../components/EventDetails'
import MeetTheSpeakers from '../components/MeetTheSpeakers'
import Sponsors from '../components/Sponsors'
import MeetTheOrganizers from '../components/MeetTheOrganizers'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className='bg-[#090212] max-w-[1440px] mx-auto '>
      <Head>
        <title>Polygon Lagos</title>
        <meta name="description" content="polygon lagos website." />
        <link rel="icon" href="/favicon.ico" />        
      </Head>           
      <Header />
      <EventDetails />
      <div id='speakers'></div>
      <MeetTheSpeakers />
      <div id='sponsors'></div>
      <Sponsors />
      <div id='organizers'></div>
      <MeetTheOrganizers />    
      <div id='contactus' ></div>  
      <ContactUs />
      <Footer />      
    </div>
  )
}

export default Home
