import * as React from 'react';
import { FunctionComponent } from 'react';
import './AboutSection.scss';
import { RiShareForwardLine } from 'react-icons/ri';

export const AboutSection: FunctionComponent = () => {
    return (
        <div className='AboutSection'>
            <div className='AboutSection-avatar'>
                <img
                    className='AboutSection-avatar-image'
                    src={require('../../../assets/images/profile-image.png')}
                    alt='Avatar'
                    title='Image Credit: ummmmandy.tumblr.com'
                />
                <a
                    className='AboutSection-avatar-redirect'
                    href='https://picrew.me/image_maker/114808'
                    title='Picrew Avatar Creator - by ummmmandy'
                >
                    <RiShareForwardLine />
                </a>
            </div>
            <div className='AboutSection-content'>
                <p>Hi, I'm <em>Lindsey Rutledge</em>!</p>
                <p>I am a Full Stack <em>Web Developer</em> specializing in <em>Front-end</em> web development.</p>
                <p>Currently based in <em>Bellevue, WA</em>.</p>
            </div>
        </div>
    )
};