import React, { useState } from 'react';
import Layout from '../../ui/layout';

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <Layout isMenuOpen={isOpen}
        section={<button onClick={() => setIsOpen(true)}>open</button>}
        menu={<button onClick={() => setIsOpen(false)}>close</button>}
    />;
}

export default Home;