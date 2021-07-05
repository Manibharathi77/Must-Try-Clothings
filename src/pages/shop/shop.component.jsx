import React, { Component } from 'react';

import SHOP_DATA from '../../shop.data';
import CollectionsPreview from '../../components/collections/collections-preview.component';
/**
 * This is a class because this will have a state in it.
 */

class ShopPage extends Component {

    constructor(props){

        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
           collections.map( ({id, ...otherProps}) => (
               <CollectionsPreview key= {id} {...otherProps}></CollectionsPreview>
           ))     
        );
    }
}

export default ShopPage;