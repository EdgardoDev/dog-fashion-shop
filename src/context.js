import React, { Component } from 'react';
import { storeProducts, detailProduct } from './shopData';


const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpened: false,
    modalItem: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return {products:tempProducts}
    });
  };


  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };


  processDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {detailProduct:product}
    });
  };

  addItemToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {products:tempProducts, cart:[...this.state.cart, product]}
    });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalItem: product, modalOpened:true}
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {modalOpened:false}
    });
  };

  cartIncrement = (id) => {

  }

  cartDecrement = (id) => {

  }

  removeItem = (id) => {

  }

  clearCart = () => {

  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        processDetails:this.processDetails,
        addItemToCart: this.addItemToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        cartIncrement:this.cartIncrement,
        cartDecrement:this.cartDecrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart
      }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
