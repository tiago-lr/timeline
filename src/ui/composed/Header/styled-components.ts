import styled from "styled-components";
import { DEVICE_SIZE } from "../../../utils/constants/ui";

export const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: 32px;
  position: relative;

  & > img {
    position: absolute;
    left: 32px;
    top: 32px;
  }

  @media (max-width: ${DEVICE_SIZE.tablet.max}) and (min-width: ${DEVICE_SIZE
      .tablet.min}) {
    height: 250px;
    padding: 24px;

    & > img {
      left: 24px;
      top: 24px;
    }
  }
  @media (max-width: ${DEVICE_SIZE.phablet.max}) {
    padding: 16px;
    height: 150px;

    & > img {
      left: 16px;
      top: 16px;
    }
  }

  ${(props: { isLoading: boolean; background: string }) => {
    let result = "";

    if (props.background) {
      result += `background-image: url("${props.background}");
      background-size: cover;
      background-position: center;`;
    }

    if (props.isLoading) {
      result += `
      position: relative;
  
      &::before {
          content: "";
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.5;
          background: white;
          z-index: 5;
      }`;
    }

    return result;
  }}
`;

const commonStylesInfo = `
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
`;

export const Info = styled.div`
  height: 100%;
  color: white;
  font-size: 18px;
  font-weigth: 400;
  ${commonStylesInfo}

  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    font-size: 14px;
  }
`;

export const InfoData = styled.div`
  ${commonStylesInfo}

  & > span {
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    & > span {
      gap: 4px;
    }
  }
`;

export const InfoLinks = styled.div`
  ${commonStylesInfo}

  & > a {
    color: white;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: ${DEVICE_SIZE.phablet.max}) {
    flex-flow: row nowrap;
    justify-content: flex-end;
    padding-right: 24px;
    gap: 24px;
    position: absolute;
    bottom: -24px;
    left: 0;
    right: 0;

    & > a {
      color: black;
    }
  }

  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    bottom: -20px;
    padding-right: 16px;
    gap: 16px;

    & > a {
      gap: 4px;
    }
  }
`;
