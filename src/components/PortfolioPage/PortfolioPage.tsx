import * as React from 'react';
import { FunctionComponent, useEffect, useRef, ReactNode } from 'react';
import './PortfolioPage.scss';
import {
    RiEmotionLine,
    RiLightbulbLine,
    RiBriefcase3Line,
    RiGithubLine,
    RiLinksLine
} from 'react-icons/ri';
import * as _ from 'lodash';

export interface PortfolioSection {
    id: string;
    label: string;
    icon: ReactNode;
}

export const PortfolioPage: FunctionComponent = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);

    const sections: PortfolioSection[] = [
        { id: 'about', label: 'About', icon: <RiEmotionLine /> },
        { id: 'skills', label: 'Skills', icon: <RiLightbulbLine /> },
        { id: 'work-history', label: 'Work History', icon: <RiBriefcase3Line /> },
        { id: 'projects', label: 'Projects', icon: <RiGithubLine /> },
        { id: 'links', label: 'Links', icon: <RiLinksLine /> },
    ];

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
                    {sections.map((section: PortfolioSection) => {
                        return (
                            <a id={`${section.id}-icon`} href={`#${section.id}`} title={section.label}>
                                {section.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className='PortfolioPage-content' ref={contentRef}>
                {sections.map((section: PortfolioSection) => {
                    return (
                        <div className='PortfolioPage-section'>
                            <div id={section.id} className='PortfolioPage-heading'>{section.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};