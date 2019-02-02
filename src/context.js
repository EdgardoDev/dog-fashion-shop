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

  // Function that will add new items to the cart.
  addItemToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
      return {products:tempProducts, cart:[...this.state.cart, product]}
      },
      () => {
        this.addTotal();
      }
    );
  };

  // Small functionality to open the modal window.
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalItem: product, modalOpened:true}
    });
  };

  // Here we close the modal window.
  closeModal = () => {
    this.setState(() => {
      return {modalOpened:false}
    });
  };

  // Here we increment items in the cart.
  cartIncrement = (id) => {
    let tempCart = [...this.state.cart];
    const theItem = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(theItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return{cart:[...tempCart]};
      }, 
      () => {
        this.addTotal();
      }
    );
  };

  // Here we decrement items from the cart.
  cartDecrement = (id) => {
    let tempCart = [...this.state.cart];
    const theItem = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(theItem);
    const product = tempCart[index];

    product.count = product.count -1;
    if(product.count === 0) {
      this.removeItem(id)
    }
    else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  // Next function is to remove items from the cart.
  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProduct.indexOf(this.getItem(id));
    let eraseProduct = tempProduct[index];
    eraseProduct.count = 0;
    eraseProduct.inCart = false;
    eraseProduct.total = 0;

    this.setState(() => {
      return {
        cart:[...tempCart],
        products:[...tempProduct]
      }
    }, () => {
      this.addTotal();
    });
  };

  // Here we clear the cart and leave the counter back to cero again.
  clearCart = () => {
    this.setState(() => {
      return {cart :[]};
    }, () => {
      this.setProducts();
      this.addTotal();
    });
  };

  // Here we calculate the totals (subtotal and tax).
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item =>(subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal:subTotal,
        cartTax:tax,
        cartTotal:total
      }
    });
  };

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
};

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
