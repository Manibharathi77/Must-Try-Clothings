import React from 'react';

import './collections-preview.style.scss';
import CollectionItem from '../collections-items/collections-item.component';

const CollectionsPreview = ({title, items}) => {
    return(
    <div className='collection-preview'>
        <h1 className='title'>  {title.toUpperCase()} </h1>
        
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key = {item.id} {...item}></CollectionItem>
                ))}
            </div>
    </div>);


}

export default CollectionsPreview;