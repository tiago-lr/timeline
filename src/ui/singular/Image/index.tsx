import React from 'react';
import { ImageElement } from './styled-components';

export enum IMAGE_SHAPE {
    square = '0%',
    rounded = '16%',
    circular = '50%'
}

export enum IMAGE_SIZE {
    micro = '75px',
    small = '150px',
    default = '250px',
    big = '350px',
    huge = '500px'
}

interface Props {
    source: string;
    size?: IMAGE_SIZE;
    shape?: IMAGE_SHAPE;
    isLoading?: boolean;
};

const Image = ({
    source,
    size,
    shape = IMAGE_SHAPE.circular,
    isLoading = false
}: Props) => {
    console.log("IMAGE: ", isLoading);
    return <ImageElement src={source} size={size} shape={shape} />;
}

export default Image;