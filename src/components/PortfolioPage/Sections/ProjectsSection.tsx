import * as React from 'react';
import { RiGithubLine, RiLinksLine } from 'react-icons/ri';
import './ProjectsSection.scss';

export const ProjectsSection: React.FunctionComponent = () => {
    return (
        <div className='ProjectsSection'>
            <div className='ProjectsSection-project'>
                <div className='ProjectsSection-title'>
                    <a className='ProjectsSection-link' href='https://github.com/LindseyRutledge/portfolio'>
                        <span>Portfolio</span>
                        <RiGithubLine className='ProjectsSection-linkIcon' />
                    </a>
                </div>
                <div className='ProjectsSection-description'>This project! It is a small sample of my work.</div>
                <div className='ProjectsSection-features'>
                    <div className='ProjectsSection-features-section'>
                        <div>Technologies:</div>
                        <ul>
                            <li><em>React</em></li>
                            <li><em>TypeScript</em></li>
                            <li><em>JavaScript</em></li>
                            <li><em>SCSS</em>/<em>CSS3</em></li>
                            <li><em>Github Pages</em></li>
                        </ul>
                    </div>
                    <div className='ProjectsSection-features-section'>
                        <div>Features:</div>
                        <ul>
                            <li><em>Responsive Design</em></li>
                            <li><em>Themes</em> - Light/Dark</li>
                            <li><em>Scroll Indicator</em></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='ProjectsSection-project'>
                <div className='ProjectsSection-title'>
                    <span className='ProjectsSection-link'>
                        <span>
                            <a href='https://github.com/LindseyRutledge/bells'>
                                Bells
                        </a>
                        </span>
                        <span>
                            <a href="https://lindseyrutledge.github.io/bells/">
                                <RiLinksLine className='ProjectsSection-linkIcon' />
                            </a>
                            <a href='https://github.com/LindseyRutledge/bells'>
                                <RiGithubLine className='ProjectsSection-linkIcon' />
                            </a>
                        </span>
                    </span>
                </div>
                <div className='ProjectsSection-description'>A simple application for "playing" hand bells.</div>
                <div className='ProjectsSection-features'>
                    <div className='ProjectsSection-features-section'>
                        <div>Technologies:</div>
                        <ul>
                            <li><em>React</em></li>
                            <li><em>TypeScript</em></li>
                            <li><em>JavaScript</em></li>
                            <li><em>SCSS</em>/<em>CSS3</em></li>
                            <li><em>Github Pages</em></li>
                        </ul>
                    </div>
                    <div className='ProjectsSection-features-section'>
                        <div>Features:</div>
                        <ul>
                            <li>Lock note and <em>shake device</em> to ring bell (mobile)</li>
                            <li>Press button to play bell sound</li>
                            <li><em>Responsive Design</em></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};