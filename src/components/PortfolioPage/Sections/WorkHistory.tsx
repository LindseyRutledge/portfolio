import * as React from 'react';
import { FunctionComponent, ReactNode, useState } from 'react';
import classNames from 'classnames';
import './WorkHistory.scss';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { resumeLink } from '../../../App';

export const WorkHistory: FunctionComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const navigate = (increment: number) => {
        let newIndex = selectedIndex + increment;
        newIndex = Math.max(0, newIndex);
        newIndex = Math.min(newIndex, positions.length - 1);

        setSelectedIndex(newIndex);
    };

    return (
        <div className='WorkHistory'>
            <div className='WorkHistory-info'>
                Below is some information on some of my latest work experience.
                Please check out my
                <a href='https://www.linkedin.com/in/rutledgelindsey'> LinkedIn </a>
                or
                <a href={resumeLink}> Resume </a>
                for additional experience.
            </div>
            <div className='WorkHistory-content'>
                <div
                    className={classNames(
                        'WorkHistory-navigation',
                        selectedIndex === 0 ? 'end' : undefined
                    )}
                    onClick={() => { navigate(-1) }}
                >
                    <RiArrowLeftSLine />
                </div>
                <div>
                    {positions.map((position: PositionInfo, i, number) => {
                        return <WorkHistoryPosition selected={i === selectedIndex} {...position} />;
                    })}
                </div>
                <div
                    className={classNames(
                        'WorkHistory-navigation',
                        selectedIndex === positions.length - 1 ? 'end' : undefined
                    )}
                    onClick={() => { navigate(1) }}
                >
                   <RiArrowRightSLine />
                </div>
            </div>
        </div>
    );
};

interface PositionInfo {
    title: string;
    company: string;
    timeframe: string;
    location: string;
    description: ReactNode[];
}

interface WorkHistoryPositionProps extends PositionInfo {
    selected: boolean;
}

const WorkHistoryPosition: FunctionComponent<WorkHistoryPositionProps> = (props: WorkHistoryPositionProps) => {
    return (
        <div className={classNames('WorkHistory-position', props.selected ? 'selected' : undefined)}>
            <div className='WorkHistory-title'>{props.title} - {props.company}</div>
            <div className='WorkHistory-timeframe'>{props.timeframe}</div>
            <div className='WorkHistory-location'>{props.location}</div>
            <ul className='WorkHistory-description'>
                {props.description.map((descriptionItem: ReactNode) => {
                    return <li>{descriptionItem}</li>;
                })}
            </ul>
        </div>
    );
};

const positions: PositionInfo[] = [
    {
        title: 'Software Developer',
        company: 'The Boeing Company',
        timeframe: 'June 2020 – Present',
        location: 'Bellevue, WA; Virtual',
        description: [
            <><em>Technologies: </em> React, TypeScript, JavaScript, Kotlin, Sass/CSS, Cloud Foundry, GitLab, SQL, etc.</>,
            <>Developed code for a major application used by executives for displaying and utilizing key metrics.</>,
            <>Collaborated with other developers to encourage continuous improvement through use of Pair Programming,
            Test-Driven Development (TDD), and more.</>,
        ]
    },
    {
        title: 'Software Developer',
        company: 'The Boeing Company',
        timeframe: 'July 2018 – June 2020',
        location: 'Bellevue, WA',
        description: [
            <><em>Technologies:</em> React, TypeScript, JavaScript, Kotlin, Java, Sass/CSS, Cloud Foundry, GitLab, SQL, etc.</>,
            <>Developed code for web applications for crucial Boeing initiatives using React, TypeScript, Pivotal Cloud Foundry (PCF),
            Git, Jest, IntelliJ, Sass, etc.</>,
            <>Transformed Boeing development teams by applying key best practices: Extreme Programming (XP), Pair Programming,
            Test-Driven Development (TDD), balanced teams, etc.</>,
            <>Utilized Pair Programming to teach other developers and teams by demonstration through collaboration.</>,
        ]
    },
    {
        title: 'Software Developer',
        company: 'The Boeing Company',
        timeframe: 'June 2014 – July 2018',
        location: 'Seattle, WA',
        description: [
            <><em>Technologies:</em> JavaScript, .NET/C#, MVC, Knockout, Bootstrap, SharePoint, CSS, SQL, SlickGrid, etc.</>,
            <>Developed code for an array of Microsoft stack MVC and MVVM web applications for Boeing’s Test and Evaluation team.</>,
            <>Collaborated with users to refine requirements and polish user interfaces.</>,
            <>Worked with a large team of individuals based both locally and around the world.</>,
            <>Tested applications through unit testing.</>,
        ]
    }
];