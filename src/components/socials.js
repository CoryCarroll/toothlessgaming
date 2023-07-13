import React from 'react'

export const Socials = () => {
  return (
    <div>
        <div className='flex justify-center space-x-10 pt-8'>
            <a href='https://www.instagram.com/toothlesscc/'>
                <img className='w-12' src='images/instagram.svg' alt='Instagram'/>
            </a>
            <a href='https://www.youtube.com/channel/UCN2pMqyZYtfkEhbd_wI-NUg'>
                <img className='w-12' src='images/youtube.svg' alt='Youtube-Channel'/>
            </a>
            <a href='https://www.twitch.tv/toothlesscc'>
                <img className='w-12' src='images/twitch.svg' alt='Twitch'/>
            </a>
            <a href='https://www.tiktok.com/@toothlesscc?lang=en'>
                <img className='w-12' src='images/tiktok.svg' alt='TikTok'/>
            </a>
        </div>
    </div>
  )
  
}

export default Socials;