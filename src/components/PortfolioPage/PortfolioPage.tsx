import * as React from 'react';
import { FunctionComponent, useEffect, useRef } from 'react';
import './PortfolioPage.scss';
import {
    RiEmotionLine,
    RiLightbulbLine,
    RiBriefcase3Line,
    RiGithubLine,
    RiLinksLine
} from 'react-icons/ri';
import * as _ from 'lodash';

export const PortfolioPage: FunctionComponent = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        updateMenu();

        const throttledScroll = _.throttle(updateMenu, 50);
        const currentContentRef: HTMLDivElement | null = contentRef.current;

        if (currentContentRef) {
            currentContentRef.addEventListener('scroll', throttledScroll);
        }

        return () => {
            if (currentContentRef) {
                currentContentRef.removeEventListener('scroll', throttledScroll);
            }
        };
    }, []);

    const updateMenu = () => {
        const currentContentRef: HTMLDivElement | null = contentRef.current;
        const currentIconsRef: HTMLDivElement | null = iconsRef.current;

        if (currentContentRef && currentIconsRef) {
            const contentPos = currentContentRef.offsetTop;
            const contentHeight = currentContentRef.offsetHeight;

            const scrollPosTop = currentContentRef.scrollTop;
            const scrollPosBottom = scrollPosTop + currentContentRef.clientHeight;
            const scrollHeight = currentContentRef.scrollHeight;

            const headings: HTMLCollection | any = currentContentRef.getElementsByClassName('PortfolioPage-heading');

            let selectedSet = false;

            const headingsArray: any = [...headings];

            for (const [index, heading] of headingsArray.entries()) {
                const id = heading.id;
                const headingPos = heading.offsetTop - contentPos;

                const matchingIcon: HTMLAnchorElement | null = currentIconsRef.querySelector(`#${id}-icon`);

                if (matchingIcon) {
                    matchingIcon.classList.remove('selected');

                    if (scrollPosTop + contentHeight === scrollHeight) {
                        selectedSet = true;

                        if (index === headingsArray.length - 1) {
                            matchingIcon.classList.add('selected');
                        }
                    }

                    if (!selectedSet && headingPos >= scrollPosTop && headingPos <= scrollPosBottom) {
                        matchingIcon.classList.add('selected');
                        selectedSet = true;
                    }
                }
            };
        }
    };

    return (
        <div className='PortfolioPage'>
            <div className='PortfolioPage-header'>
                <div className='PortfolioPage-title'>Lindsey Rutledge</div>
                <div className='PortfolioPage-header-icons' ref={iconsRef}>
                    <a id='about-icon' href='#about' title='About'>
                        <RiEmotionLine />
                    </a>
                    <a id='skills-icon' href='#skills' title='Skills'>
                        <RiLightbulbLine />
                    </a>
                    <a id='work-history-icon' href='#work-history' title='Work History'>
                        <RiBriefcase3Line />
                    </a>
                    <a id='projects-icon' href='#projects' title='Projects'>
                        <RiGithubLine />
                    </a>
                    <a id='links-icon' href='#links' title='Links'>
                        <RiLinksLine />
                    </a>
                </div>
            </div>
            <div className='PortfolioPage-content' ref={contentRef}>
                <div className='PortfolioPage-section'>
                    <div id='about' className="PortfolioPage-heading">About</div>
                </div>
                <div className='PortfolioPage-section'>
                    <div id='skills' className="PortfolioPage-heading">Skills</div>
                </div>
                <div className='PortfolioPage-section'>
                    <div id='work-history' className="PortfolioPage-heading">Work History</div>
                </div>
                <div className='PortfolioPage-section'>
                    <div id='projects' className="PortfolioPage-heading">Projects</div>
                </div>
                <div className='PortfolioPage-section'>
                    <div id='links' className="PortfolioPage-heading">Links</div>
                </div>
            </div>
        </div>
    );
};