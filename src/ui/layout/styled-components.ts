import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  height: 100vh;
  max-width: 2048px;
  min-width: 320px;
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
`;

export const Aside = styled.aside`
  flex: 0 0 auto;
  width: 128px;
  background: lightgray;
  border: 2px solid black;
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

export const Menu = styled.section``;
