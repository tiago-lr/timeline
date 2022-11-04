import React, { ReactElement } from "react";
import { Menu, Container, Header, Main, Aside, Wrapper } from "./styled-components";

export type Props = {
    isLoading?: boolean;
    isMenuOpen?: boolean;
    header?: ReactElement;
    main?: ReactElement;
    aside?: ReactElement;
    menu?: ReactElement;
};

const Layout = ({isLoading = false, isMenuOpen = false, header, main, aside, menu}: Props) => {
    return (
    <Wrapper isLoading={isLoading}>
      <Aside>
        {aside}
      </Aside>
      <Main>
        <Header>
            {header}
        </Header>
        <Container>
            {main}
        </Container>
        {menu ? 
        <Menu>
            {menu} - {isMenuOpen}
        </Menu>
        : null}
      </Main>
    </Wrapper>); 
}

export default Layout;