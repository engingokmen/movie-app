import React from 'react'
import { FacebookIcon } from '../../assets/FacebookIcon'
import { InstagramIcon } from '../../assets/InstagramIcon'
import { TwitterIcon } from '../../assets/TwitterIcon'
import { YoutubeIcon } from '../../assets/YoutubeIcon'
import { texts } from '../../texts'

export const Footer = () => {
    return (
        <footer>
            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YoutubeIcon />
            </div>
            <div className="links">
                <p>{texts.conditions}</p>
                <p>{texts.privacy}</p>
                <p>{texts.pressRoom}</p>
            </div>
            <p className="register">{texts.moviesByEg}</p>
        </footer>
    )
}
