import React from 'react';

import './homepage.styles.scss';

/**
 * Functional Component -> Doesn't have any state.
 */
const HomePage = () => (

    <div className='homePage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> SHIRTS </h1>
                        <span className='subtitle'>
                            SHOP NOW
                        </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> PANTS </h1>
                        <span className='subtitle'>
                            SHOP NOW
                        </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> HOODIES </h1>
                        <span className='subtitle'>
                            SHOP NOW
                        </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> MEN </h1>
                        <span className='subtitle'>
                            SHOP NOW
                        </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> WOMEN </h1>
                        <span className='subtitle'>
                            SHOP NOW
                        </span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
