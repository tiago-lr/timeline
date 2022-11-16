import React, { ReactElement, useState } from "react";
import { Menu, Container, Header, Main, Section, Wrapper } from "./styled-components";

export type Props = {
    isLoading?: boolean;
    isMenuOpen?: boolean;
    header?: ReactElement;
    main?: ReactElement;
    section?: ReactElement;
    menu?: ReactElement;
};

const Layout = ({isLoading = false, isMenuOpen = false, header, main, section, menu}: Props) => {
    return (
    <Wrapper isLoading={isLoading}>
      <Section>
        {section}
      </Section>
      <Main>
        <Header>
            {header}
        </Header>
        <Container>
            {main}
        </Container>
      </Main>
      <Menu isOpen={isMenuOpen}>
        {menu}
      </Menu>
    </Wrapper>); 
}

export default Layout;