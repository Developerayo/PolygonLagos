import Facebook from '../components/icons/FacebookLogo'
import Twitter from '../components/icons/TwitterLogo'
import Linkedin from '../components/icons/LinkedinLogo'
import Instagram from '../components/icons/InstagramLogo'


const SocialMedia = () => {
  const style = "mx-1 cursor-pointer "
  return (
    <div className='flex flex-row'>      
      <Facebook className={style} />
      <Twitter className={style} />
      <Linkedin className={style} />
      <Instagram className={style} />
    </div>
  )
}

export default SocialMedia
