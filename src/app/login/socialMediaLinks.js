import FacebookLogo from '../../../public/login/Facebook.png'
import GitHubLogo from '../../../public/login/GitHub.png'
import GoogleLogo from '../../../public/login/Google.png'
import TwitterLogo from '../../../public/login/Twitter.png'
import Image from 'next/image';

const socialMediaLinks = ()=>{
  const socialMediaList = [
    {
      title: 'Facebook',
      image : FacebookLogo
    },
    {
      title: 'GitHub',
      image : GitHubLogo
    },
    {
      title: 'Google',
      image : GoogleLogo
    },
    {
      title: 'Twitter',
      image : TwitterLogo
    },
  ]

  return(
    <div className='flex justify-evenly'>
      {socialMediaList.map((social)=>{
        return <Image
        key={social.title}
        src={social.image}
        width={50}
        height={50}
        alt={social.title}
        className="cursor-pointer"
        />
      })}
    </div>
  )
}

export default socialMediaLinks;