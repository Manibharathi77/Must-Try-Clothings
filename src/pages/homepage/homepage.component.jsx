import React from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
/**
 * Functional Component -> Doesn't have any state.
 */
const HomePage = () => (

    <div className='homePage'>
        <Directory></Directory>
    </div>
);

export default HomePage;
