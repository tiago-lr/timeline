import React from 'react';
import { IPersonalData } from '../../../utils/data/profile';
import Image from '../../singular/Image';
import { Info, InfoData, InfoLinks, Wrapper } from './styled-components';
import { Linkedin } from "@styled-icons/icomoon/Linkedin";
import { Github } from "@styled-icons/icomoon/Github";
import { Laptop } from "@styled-icons/icomoon/Laptop";
import { User } from "@styled-icons/icomoon/User";
import { Location } from "@styled-icons/icomoon/Location";


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
            <InfoData>
                <span><User size={18} />{name}</span>
                <span><Laptop size={18} />{jobTitle}</span>
                <span><Location size={18} />{location}</span>
            </InfoData>
            <InfoLinks>
                <a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />Linkedin</a>
                <a href={github} target="_blank" rel="noopener noreferrer"><Github size={18} />Github</a>
            </InfoLinks>
        </Info>
    </Wrapper>;
}

export default HeaderUI;