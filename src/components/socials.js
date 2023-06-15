import React from 'react'

export const Socials = () => {
  return (
    <div>
        <p className='font-bold text-3xl text-slate-100'>FOLLOW ME ON ALL SOCIALS</p>
        <div className='flex justify-evenly pt-8'>
            <a href='https://www.instagram.com/toothlesscc/'>
                <img className='object-cover fill-transparent w-20' src='images/instagram.svg' alt='Instagram'/>
            </a>
            <a href='https://www.youtube.com/channel/UCN2pMqyZYtfkEhbd_wI-NUg'>
                <img className='object-cover w-20' src='images/youtube.svg' alt='Youtube-Channel'/>
            </a>
            <a href='https://www.twitch.tv/toothlesscc'>
                <img className='object-cover w-20' src='images/twitch.svg' alt='Twitch'/>
            </a>
            <a href='https://www.tiktok.com/@toothlesscc?lang=en'>
                <img className='object-cover w-20' src='images/tiktok.svg' alt='TikTok'/>
            </a>
        </div>
    </div>
  )
  
}

export default Socials;