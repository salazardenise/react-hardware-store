import React, {Component} from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

  class HomePage extends Component {

    constructor() {
      super();

      this.state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: true,
        productList: [
          {
            productName: 'Hammer',
            description: 'Itsa hammer',
            price: 12.3,
          },
          {
            productName: 'Nail',
            description: 'Itsa nail',
            price: 0.12,
          },
          {
            productName: 'Chainsaw',
            description: 'very sharp',
            price: 20,
          }
        ]};
      }

    toggleEditSaleItem = () => {
      const editSaleItem = !this.state.editSaleItem;
      this.setState({editSaleItem});
    };

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale});
      };

    addNewProductToProductList = (newProduct) => {
      const productList = [...this.state.productList]; // copy array of state productList
      productList.push(newProduct);
      this.setState({productList}); // replace productList state
    };

    deleteProductFromProductList = (index) => {
      const productList = [...this.state.productList];
      productList.splice(index, 1);
      this.setState({productList});
    }

    render() {

      const AdminViewComponent = () => (<AdminView 
                                            productList={this.state.productList}
                                            addNewProductToProductList={this.addNewProductToProductList}
                                            deleteProductFromProductList={this.deleteProductFromProductList}
                                            hideDeleteButton={false}/>);
      const ShopViewComponent = () => (<ShopView 
                                            productList={this.state.productList}
                                            deleteProductFromProductList={this.deleteProductFromProductList}
                                            hideDeleteButton={true}/>)
      return (
          <div>
            <h1>My Hardware Store</h1>
            <div>
              <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
              <span>
                <button onClick={this.toggleEditSaleItem}>
                  { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
                </button>
              </span>

                {
                    this.state.editSaleItem ?
                    <div>
                        <input 
                        onChange={this.handleItemCurrentlyOnSaleChange}
                        value={this.state.itemCurrentlyOnSale} 
                        type="text" />
                    </div>
                    : null
                }

                
            </div>
            <Router>
              <div>
                <div>
                  <Switch>
                      <Route exact path="/adminView" render={AdminViewComponent}/>
                      <Route exact path="/shopView" render={ShopViewComponent}/>
                  </Switch>
                </div>
                <div>
                  <Link to="/adminView">Admin View</Link>
                  <br></br>
                  <Link to="/shopView">Shop View</Link>
                </div>
              </div>
            </Router>
          </div>
          
      );
    }
  }
  export default HomePage;