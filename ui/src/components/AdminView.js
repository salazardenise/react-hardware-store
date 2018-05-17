import React, {Component} from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import {Link} from 'react-router-dom';

class AdminView extends Component {
  render() {

    //console.log("in admin view: " + this.props.hideDeleteButton);

    return (
        <div>
          <h1>Admin View</h1>
          <h2>Products</h2>
          <ProductList 
            productList={this.props.productList}
            hideDeleteButton={this.props.hideDeleteButton}
            deleteProductFromProductList={this.props.deleteProductFromProductList}/>
          
          <h2>Create a New Product</h2>
          <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}/>

          <Link to="/">Home</Link>
        </div>
    );
  }
}
export default AdminView;