import React from 'react';

import { ILinkedinData } from "../../../model/profile";
import Image, { IMAGE_SIZE } from '../../singular/Image';
import { Wrapper } from './styled-compoents';

interface Props {
    isLoading?: boolean;
    data: ILinkedinData[];
};

const CareerPathUI = ({isLoading = false, data}: Props) => {
    if (!Array.isArray(data) || !data.length) {
        return null;
    }

    return <Wrapper isLoading={isLoading}>
        <Image source={data[0].image} size={IMAGE_SIZE.micro} description={data[0].name} />
        <div>
        {data.slice(1).map(element => <Image source={element.image} size={IMAGE_SIZE.micro} description={element.name} />)}
        </div>
    </Wrapper>;
}

export default CareerPathUI;