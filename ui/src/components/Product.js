import React, {Component} from 'react';

class Product extends Component {
  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;
    //console.log("hideDeleteButton in product: " + this.props.hideDeleteButton);

    return (
        <div>
          <h3>{productName}</h3>
          <div>{description}</div>
          <div>{price}</div>

          { (this.props.hideDeleteButton) 
                ? (<div></div>)
                : (<div><button onClick={() => this.props.deleteProductFromProductList(this.props.index)}>Delete</button></div>)
          }
        </div>
    );
  }
}

export default Product;