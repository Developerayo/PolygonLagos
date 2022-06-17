import Facebook from '../components/icons/FacebookLogo'
import Twitter from '../components/icons/TwitterLogo'
import Linkedin from '../components/icons/LinkedinLogo'
import Instagram from '../components/icons/InstagramLogo'


const SocialMedia = () => {
  const style = "mx-1 cursor-pointer "
  return (
    <div className='flex flex-row'>      
      <a href="https://www.facebook.com/0xPolygon.Technology/" target="_blank" ><Facebook className={style} /></a>
      <a href="https://twitter.com/polygonlagos" target="_blank" > <Twitter className={style}/></a>
      <a href="https://in.linkedin.com/company/0xpolygon" target="_blank" ><Linkedin className={style} /></a>
      <a href="https://www.instagram.com/0xpolygon/?hl=en" target="_blank" ><Instagram className={style} /></a>
    </div>
  )
}

export default SocialMedia
