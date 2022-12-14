import React from 'react';

import { ILinkedinData } from "../../../model/profile";
import Image, { IMAGE_SIZE } from '../../singular/Image';
import { Wrapper } from './styled-compoents';

interface Props {
    isLoading?: boolean;
    data: ILinkedinData[];
    onSelect?: (id: number) => void
};

const CareerPathUI = ({isLoading = false, data, onSelect = ()=>{}}: Props) => {
    if (!Array.isArray(data) || !data.length) {
        return null;
    }

    return <Wrapper isLoading={isLoading}>
        <button onClick={() => onSelect(data[0].id)}>
            <Image source={data[0].image} size={IMAGE_SIZE.micro} description={data[0].name} />
        </button>
        <div>
            {data.slice(1).map(element => <button key={element.id} onClick={() => onSelect(element.id)}>
                <Image source={element.image} size={IMAGE_SIZE.micro} description={element.name} />
            </button>)}
        </div>
    </Wrapper>;
}

export default CareerPathUI;