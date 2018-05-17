import React, {Component} from 'react';

import Product from './Product';

class ProductList extends Component {
  render() {
    const productList = this.props.productList;

    console.log(productList);
    //console.log("in product list: " + this.props.hideDeleteButton);

    const productComponents = productList.map((product, index) => {
      return <Product
          productName={product.productName}
          description={product.description}
          price={product.price}
          key={index}
          index={index}
          hideDeleteButton={this.props.hideDeleteButton}
          deleteProductFromProductList={this.props.deleteProductFromProductList}/>;
    });

    return (
        <div>
          { productComponents }
        </div>
    );

  }
}

export default ProductList;
