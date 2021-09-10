import * as React from 'react';
import { FunctionComponent } from 'react';
import './LinksSection.scss';
import { RiLinkedinBoxLine, RiGithubLine, RiFileLine } from 'react-icons/ri';
import { resumeLink } from '../../../App';

export const LinksSection: FunctionComponent = () => {
    return (
        <div className='LinksSection'>
            <a href='https://www.linkedin.com/in/rutledgelindsey/'>
                <div className='LinksSection-link'>
                    <RiLinkedinBoxLine />
                    <div className='LinksSection-link-label'>LinkedIn</div>
                </div>
            </a>
            <a href='https://github.com/LindseyRutledge/'>
                <div className='LinksSection-link'>
                    <RiGithubLine />
                    <div className='LinksSection-link-label'>GitHub</div>
                </div>
            </a>
            <a href={resumeLink}>
                <div className='LinksSection-link'>
                    <RiFileLine />
                    <div className='LinksSection-link-label'>Resume</div>
                </div>
            </a>
        </div>
    );
};