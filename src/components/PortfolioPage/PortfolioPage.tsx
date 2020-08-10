import * as React from 'react';
import { FunctionComponent } from 'react';
import './PortfolioPage.scss';

export const PortfolioPage: FunctionComponent = () => {
    return (
        <div className='PortfolioPage'>
            <div className='PortfolioPage-header'>
                Lindsey Rutledge
            </div>
            <div className='PortfolioPage-content'>
                <div className='PortfolioPage-section'>About</div>
                <div className='PortfolioPage-section'>Skills</div>
                <div className='PortfolioPage-section'>Work History</div>
                <div className='PortfolioPage-section'>Projects</div>
                <div className='PortfolioPage-section'>Links</div>
            </div>
        </div>
    );
};