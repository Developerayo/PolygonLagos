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
        <link rel="icon" href="/favicon.png" />
        <title>Polygon Guild Lagos</title>
        <meta name="title" content="Polygon Guild Lagos" />
        <meta
          name="description"
          content="Polygon Guild Lagos is a community for everyone looking to learn more about Web3 or get up to speed Founded by Shodipo Ayomide, Global Head of Developer Advocacy at Polygon."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://polygonlagos.com" />
        <meta property="og:title" content="Polygon Guild Lagos" />
        <meta
          property="og:description"
          content="Polygon Guild Lagos is a community for everyone looking to learn more about Web3 or get up to speed Founded by Shodipo Ayomide, Global Head of Developer Advocacy at Polygon."
        />
        <meta
          property="og:image"
          content="/main.jpeg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://polygonlagos.com" />
        <meta property="twitter:title" content="Polygon Guild Lagos" />
        <meta
          property="twitter:description"
          content="Polygon Guild Lagos is a community for everyone looking to learn more about Web3 or get up to speed Founded by Shodipo Ayomide, Global Head of Developer Advocacy at Polygon."
        />
        <meta
          property="twitter:image"
          content="/main.jpeg"
        />
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
