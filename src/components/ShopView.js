import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductList from './ProductList';

class ShopView extends Component {
    render() {

        //console.log("in shop view: " + this.props.hideDeleteButton);

        return (
            <div>
                <h1>Shop View</h1>
                <h2>Products</h2>
                <ProductList 
                    productList={this.props.productList}
                    hideDeleteButton={this.props.hideDeleteButton}
                    deleteProductFromProductList={this.props.deleteProductFromProductList}/>


                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default ShopView;