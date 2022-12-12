import styled from "styled-components";
import { COLORS, DEVICE_SIZE } from "../../../utils/constants/ui";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  padding: 24px;
  gap: 24px;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 24px;
    flex-flow: column nowrap;
  }

  @media (max-width: ${DEVICE_SIZE.tablet.max}) and (min-width: ${DEVICE_SIZE
      .tablet.min}) {
    padding: 16px;

    & img {
      width: 64px;
      height: 64px;
    }
  }
  @media (max-width: ${DEVICE_SIZE.phablet.max}) and (min-width: ${DEVICE_SIZE
      .phablet.min}) {
    padding: 16px 8px;
    gap: 16px;

    & img {
      width: 60px;
      height: 60px;
    }
    & > div {
      gap: 16px;
    }
  }
  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: 12px;
    padding: 8px 12px;

    & img {
      width: 60px;
      height: 60px;
    }
    & > div {
      gap: 12px;
      flex-flow: row nowrap;
    }
  }

  ${(props: { isLoading: boolean }) =>
    props.isLoading
      ? `
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
          background: ${COLORS.secondary.main};
          z-index: 5;
      }`
      : ""}
`;
