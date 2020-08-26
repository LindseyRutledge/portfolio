import * as React from 'react';
import { FunctionComponent } from 'react';
import './SkillsSection.scss';

export const SkillsSection: FunctionComponent = () => {
    return (
        <div className='SkillsSection'>
            <div className='SkillsSection-description'>Here are a few technologies I have been using lately:</div>
            <ul className='SkillsSection-list'>
                <li><em>React</em></li>
                <li><em>TypeScript</em></li>
                <li><em>JavaScript (ES6+)</em></li>
                <li><em>SCSS</em>/<em>CSS</em></li>
                <li><em>HTML</em></li>
                <li><em>Java</em></li>
                <li><em>Kotlin</em></li>
                <li><em>Cloud Foundry</em></li>
            </ul>
        </div>
    );
};