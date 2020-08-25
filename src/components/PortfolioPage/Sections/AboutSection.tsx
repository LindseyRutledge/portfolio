import * as React from 'react';
import { FunctionComponent } from 'react';
import './AboutSection.scss';
import { RiShareForwardBoxLine, RiShareBoxLine, RiShareForwardLine } from 'react-icons/ri';

export const AboutSection: FunctionComponent = () => {

    return (
        <div className='AboutSection'>
            <div className='AboutSection-avatar'>
                <img
                    className='AboutSection-avatar-image'
                    src={require('../../../assets/images/profile-image.png')}
                    alt='Avatar'
                />
                <a
                    className='AboutSection-avatar-redirect'
                    href='https://picrew.me/image_maker/257476'
                    title='Image Credit'
                >
                    <RiShareForwardLine />
                </a>
            </div>
            <div className='AboutSection-content'>
                <p>Hi, I'm <em>Lindsey Rutledge</em>!</p>
                <p>I am a Full Stack <em>Web Developer</em> specializing in <em>Front-end</em> web development.</p>
                <p>I currently based in <em>Bellevue, WA</em>.</p>
            </div>
        </div>
    )
};