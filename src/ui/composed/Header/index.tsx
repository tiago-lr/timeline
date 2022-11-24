import React from 'react';
import { IPersonalData } from '../../../utils/data/profile';
import Image from '../../singular/Image';
import { Info, Wrapper } from './styled-components';
import { Linkedin } from "@styled-icons/icomoon/Linkedin";
import { Github } from "@styled-icons/icomoon/Github";


interface Props extends IPersonalData {
    isLoading?: boolean;
};

const HeaderUI = ({isLoading = false,
    name, 
    picture,
    background,
    linkedin,
    github,
    location,
    jobTitle
}: Props) => {
    return <Wrapper isLoading={isLoading} background={background}>
        <Image source={picture} />
        <Info>
            <div>
                <span>{name}</span>
                <span>{jobTitle}</span>
                <span>{location}</span>
            </div>
            <div>
                <a href={linkedin} target="_blank"><Linkedin size={18} />Linkedin</a>
                <a href={github} target="_blank"><Github size={18} />Github</a>
            </div>
        </Info>
    </Wrapper>;
}

export default HeaderUI;