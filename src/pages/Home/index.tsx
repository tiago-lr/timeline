import React, { useState } from 'react';
import CareerPath from '../../components/CareerPath';
import Header from '../../components/Header';
import Layout from '../../ui/layout';

const Home = () => {
    const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
    const [previewTitle, setPreviewTitle] = useState<string>('');
    const [previewProps, setPreviewProps] = useState<unknown>();

    const onSelectCompany = (id: number, title?: string) => {
        setIsPreviewOpen(true);
        setPreviewTitle(title || '');
        setPreviewProps(id);
    }

    return <Layout
        header={<Header />}
        menu={<CareerPath onSelectCompany={onSelectCompany} />}
        isPreviewOpen={isPreviewOpen}
        previewComponent={<div>{`Content: ${previewProps}`}</div>}
        previewTitle={previewTitle}
        onClosePreview={() => setIsPreviewOpen(false)}
    />;
}

export default Home;