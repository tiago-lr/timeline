import styled from "styled-components";
import { DEVICE_SIZE } from "../../utils/constants/ui";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: auto;
  height: 100vh;
  max-width: ${DEVICE_SIZE.desktop.max};
  min-width: ${DEVICE_SIZE.mobile.min};
  display: flex;
  flex-flow: row nowrap;

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
        color: black;
        background: white;
        font-size: 40px;
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
  background: lightgray;
  border: 2px solid black;

  @media (max-width: ${DEVICE_SIZE.tablet.max}) and (min-width: ${DEVICE_SIZE
      .tablet.min}) {
    width: 80px;
  }
  @media (max-width: ${DEVICE_SIZE.phablet.max}) and (min-width: ${DEVICE_SIZE
      .phablet.min}) {
    width: 60px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile.max}) {
    width: 100%;
    height: 60px;
  }
`;

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
`;

export const Container = styled.div`
  flex: 1 1 auto;
  background: lavender;
  border: 2px solid black;
`;

export const Header = styled.header`
  flex: 0 0 auto;
  height: 250px;
  background: lightblue;
  border: 2px solid black;
`;

export const Menu = styled.aside`
  flex: 1 1 auto;
  border-left: 2px solid gray;
  background: #f4f4f4;
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
