import * as React from 'react';
import { FunctionComponent, useEffect, useRef, ReactNode, useState } from 'react';
import './PortfolioPage.scss';
import {
    RiEmotionLine,
    RiLightbulbLine,
    RiBriefcase3Line,
    RiGithubLine,
    RiLinksLine,
    RiMoonLine,
    RiSunLine
} from 'react-icons/ri';
import * as _ from 'lodash';
import classNames from 'classnames';

export interface PortfolioSection {
    id: string;
    label: string;
    icon: ReactNode;
}

export const PortfolioPage: FunctionComponent = () => {
    const [theme, setTheme] = useState<string>('dark-theme');
    const [usedLocationHash, setUsedLocationHash] = useState<boolean>(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement[]>([]);
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    const sections: PortfolioSection[] = [
        { id: 'about', label: 'About', icon: <RiEmotionLine /> },
        { id: 'skills', label: 'Skills', icon: <RiLightbulbLine /> },
        { id: 'work-history', label: 'Work History', icon: <RiBriefcase3Line /> },
        { id: 'projects', label: 'Projects', icon: <RiGithubLine /> },
        { id: 'links', label: 'Links', icon: <RiLinksLine /> },
    ];

    const updateMenu = () => {
        const currentContentRef: HTMLDivElement | null = contentRef.current;

        if (currentContentRef) {
            const contentHeight: number = currentContentRef.offsetHeight;
            const scrollTopPosition: number = currentContentRef.scrollTop;
            const scrollBottomPosition: number = scrollTopPosition + contentHeight;
            const scrollHeight: number = currentContentRef.scrollHeight;

            const isScrolledToBottom: boolean = scrollTopPosition + contentHeight === scrollHeight;

            if (window.location.hash && !usedLocationHash) {
                console.log('hash')
                setSelectedMenuItemByHashLocation();
                setUsedLocationHash(true);
            } else if (isScrolledToBottom) {
                console.log('bottom')
                setSelectedMenuItem(sections.length - 1);
            } else {
                console.log('position')
                setSelectedMenuItemByScrollPosition(scrollTopPosition, scrollBottomPosition);
            }
        }
    };

    const throttledScroll = _.throttle(updateMenu, 100);

    const setupScrollEventListener = () => {
        contentRef.current?.addEventListener('scroll', throttledScroll);

        return () => {
            contentRef.current?.removeEventListener('scroll', throttledScroll);
        };
    };

    useEffect(updateMenu, []);

    useEffect(setupScrollEventListener, [usedLocationHash]);

    const setSelectedMenuItem = (index: number) => {
        sections.forEach((section: PortfolioSection, i: number) => {
            iconsRef.current[i]?.classList.remove('selected');
        });
        iconsRef.current[index]?.classList.add('selected');
    };

    const setSelectedMenuItemByHashLocation = () => {
        const location = window.location.hash.replace('#', '');

        const sectionIndex = sections.findIndex((section: PortfolioSection) => {
            return section.id === location
        });

        setSelectedMenuItem(sectionIndex);
    };

    const setSelectedMenuItemByScrollPosition = (scrollTopPosition: number, scrollBottomPosition: number) => {
        const currentContentRef: HTMLDivElement | null = contentRef.current;

        if (currentContentRef) {
            const sectionVisibleHeight: number[] = [];

            sections.forEach((s: PortfolioSection, i: number) => {
                const section: HTMLDivElement = sectionsRef.current[i];

                if (section) {
                    const sectionHeight: number = section.offsetHeight;

                    const sectionTopPosition = section.offsetTop - currentContentRef.offsetTop;
                    const secitonBottomPosition = sectionTopPosition + sectionHeight;

                    const visibleHeight: number = Math.max(Math.min(scrollBottomPosition, secitonBottomPosition) - Math.max(scrollTopPosition, sectionTopPosition), 0);
                    const visibleHeightPercentage: number = visibleHeight / sectionHeight;

                    sectionVisibleHeight[i] = visibleHeightPercentage;
                }
            });

            setSelectedMenuItem(sectionVisibleHeight.indexOf(Math.max(...sectionVisibleHeight)));
        }
    };

    const debouncedAddEventListener = _.debounce(() => {
        contentRef.current?.addEventListener('scroll', throttledScroll);
    }, 1000);

    return (
        <div className={classNames('PortfolioPage', theme)}>
            <div className='PortfolioPage-header'>
                <div className='PortfolioPage-title'>
                    <div className='PortfolioPage-name'>Lindsey</div>
                    <div className='PortfolioPage-name'>Rutledge</div>
                    <div
                        className='PortfolioPage-themeToggle'
                        onClick={() => setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme')}
                        title='Change theme'
                    >
                        {theme === 'dark-theme' ? <RiMoonLine /> : <RiSunLine />}
                    </div>
                </div>
                <div className='PortfolioPage-header-icons'>
                    {sections.map((section: PortfolioSection, i: number) => {
                        return (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={() => {
                                    contentRef.current?.removeEventListener('scroll', throttledScroll);
                                    debouncedAddEventListener();
                                    setSelectedMenuItem(i);
                                }}
                            >
                                <div
                                    className='PortfolioPage-header-iconGroup'
                                    ref={icon => icon ? iconsRef.current[i] = icon : undefined}
                                >
                                    <div className={classNames('PortfolioPage-header-icon', `${section.id}-icon`)}>
                                        {section.icon}
                                    </div>
                                    <div className={classNames('PortfolioPage-header-iconLabel', `${section.id}-label`)}>
                                        {section.label}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className='PortfolioPage-content' ref={contentRef}>
                {sections.map((section: PortfolioSection, i: number) => {
                    return (
                        <div
                            key={section.id}
                            id={section.id}
                            className='PortfolioPage-section'
                            ref={section => section ? sectionsRef.current[i] = section : undefined}
                        >
                            <div className='PortfolioPage-heading'>
                                <span className='PortfolioPage-heading-text'>{section.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};