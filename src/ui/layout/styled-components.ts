import styled from "styled-components";
import { COLORS, DEVICE_SIZE } from "../../utils/constants/ui";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: auto;
  height: 100vh;
  max-width: ${DEVICE_SIZE.desktop.max};
  min-width: ${DEVICE_SIZE.mobile.min};
  display: flex;
  flex-flow: row nowrap;
  background: ${COLORS.secondary.main};

  ${(props: { isLoading: boolean }) =>
    props.isLoading &&
    `
    position: relative;

    &::before {
        content: "Is Loading...";
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.5;
        color: ${COLORS.primary.dark};
        background: ${COLORS.secondary.main};
        font-size: 5rem;
        font-weight: 700;
        z-index: 5;
    }
`};

  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    flex-flow: column nowrap;
  }
`;

export const Section = styled.section`
  flex: 0 0 auto;
  width: 128px;
  background: ${COLORS.primary.main};

  @media (max-width: ${DEVICE_SIZE.tablet.max}) and (min-width: ${DEVICE_SIZE
      .tablet.min}) {
    width: 104px;
  }
  @media (max-width: ${DEVICE_SIZE.phablet.max}) and (min-width: ${DEVICE_SIZE
      .phablet.min}) {
    width: 80px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    width: 100%;
    height: 80px;
  }
`;

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
`;

export const Container = styled.div`
  flex: 1 1 auto;
`;

export const Header = styled.header`
  flex: 0 0 auto;
`;

export const Menu = styled.aside`
  flex: 1 1 auto;
  background: ${COLORS.secondary.dark};
  position: absolute;
  top: 0;
  height: 100%;
  transition: right 0.5s;
  border: none;
  z-index: 1;
  width: 400px;
  right: -400px;

  ${(props: { isOpen: boolean }) => props.isOpen && `right: 0;`};

  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    width: 100vw;
    right: -100vw;
    ${(props: { isOpen: boolean }) => props.isOpen && `right: 0;`};
  }
`;
