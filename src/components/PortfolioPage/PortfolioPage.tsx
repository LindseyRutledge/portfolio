import * as React from 'react';
import { FunctionComponent } from 'react';
import './PortfolioPage.scss';
import {
    RiEmotionLine,
    RiLightbulbLine,
    RiBriefcase3Line,
    RiGithubLine,
    RiLinksLine
} from 'react-icons/ri'

export const PortfolioPage: FunctionComponent = () => {
    return (
        <div className='PortfolioPage'>
            <div className='PortfolioPage-header'>
                <div className='PortfolioPage-title'>Lindsey Rutledge</div>
                <div className='PortfolioPage-header-icons'>
                    <a href='#about' title='About'>
                        <RiEmotionLine />
                    </a>
                    <a href='#skills' title='Skills'>
                        <RiLightbulbLine />
                    </a>
                    <a href='#work-history' title='Work History'>
                        <RiBriefcase3Line />
                    </a>
                    <a href='#projects' title='Projects'>
                        <RiGithubLine />
                    </a>
                    <a href='#links' title='Links'>
                        <RiLinksLine />
                    </a>
                </div>
            </div>
            <div className='PortfolioPage-content'>
                <div
                    id='about'
                    className='PortfolioPage-section'
                >
                    <div className="PortfolioPage-heading">About</div>
                </div>
                <div
                    id='skills'
                    className='PortfolioPage-section'
                >
                    <div className="PortfolioPage-heading">Skills</div>
                </div>
                <div
                    id='work-history'
                    className='PortfolioPage-section'
                >
                    <div className="PortfolioPage-heading">Work History</div>
                </div>
                <div
                    id='projects'
                    className='PortfolioPage-section'
                >
                    <div className="PortfolioPage-heading">Projects</div>
                </div>
                <div
                    id='links'
                    className='PortfolioPage-section'
                >
                    <div className="PortfolioPage-heading">Links</div>
                </div>
            </div>
        </div>
    );
};