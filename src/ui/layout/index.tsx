import React, { ReactElement } from "react";
import { Menu, Container, Header, Main, Preview, Wrapper } from "./styled-components";
import { Cross } from "@styled-icons/icomoon/Cross";

export type Props = {
    isLoading?: boolean;
    header?: ReactElement;
    menu?: ReactElement;
    main?: ReactElement;
    isPreviewOpen?: boolean;
    previewComponent?: ReactElement;
    previewTitle?: string;
    onClosePreview?: () => void;
};

const Layout = ({isLoading = false, header, menu, main, isPreviewOpen = false, previewComponent, previewTitle = '', onClosePreview = ()=>{} }: Props) => {
    return (
    <Wrapper isLoading={isLoading}>
      <Menu>
        {menu}
      </Menu>
      <Main>
        <Header>
            {header}
        </Header>
        <Container>
            {main}
        </Container>
      </Main>
      <Preview isOpen={isPreviewOpen}>
        <div>
          <button onClick={onClosePreview}><Cross size={18} /></button>
          <span>{previewTitle}</span>
        </div>
        {previewComponent}
      </Preview>
    </Wrapper>); 
}

export default Layout;