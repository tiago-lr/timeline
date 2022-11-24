import styled from "styled-components";
import { IMAGE_SHAPE, IMAGE_SIZE } from ".";
import { DEVICE_SIZE } from "../../../utils/constants/ui";

export const ImageElement = styled.img`
  border: 2px solid white;

  ${(props: { size?: IMAGE_SIZE; shape: IMAGE_SHAPE }) => `
    border-radius: ${props.shape};

    ${
      props.size
        ? `
      width: ${props.size};
      height: ${props.size};
      `
        : `
      @media (min-width: ${DEVICE_SIZE.desktop.min}) {
        width: ${IMAGE_SIZE.big};
        height: ${IMAGE_SIZE.big};
        border: 4px solid white;
      }
      @media (max-width: ${DEVICE_SIZE.tablet.max}) and (min-width: ${DEVICE_SIZE.tablet.min}) {
        width: ${IMAGE_SIZE.default};
        height: ${IMAGE_SIZE.default};
      }
      @media (max-width: ${DEVICE_SIZE.phablet.max}) {
        width: ${IMAGE_SIZE.small};
        height: ${IMAGE_SIZE.small};
      }`
    }
  `}
`;
