import React, { useState } from 'react';
import CareerPath from '../../components/CareerPath';
import Header from '../../components/Header';
import Layout from '../../ui/layout';

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <Layout isMenuOpen={isOpen}
        section={<CareerPath />}
        menu={<button onClick={() => setIsOpen(false)}>close</button>}
        header={<Header />}
    />;
}

export default Home;