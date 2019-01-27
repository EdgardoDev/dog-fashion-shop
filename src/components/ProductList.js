import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../shopData';
import { ProductConsumer } from '../context';

export default class Productlist extends Component {
  state={
    products: storeProducts
  }
  render() {
    return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="OUR" title="PRODUCTS" />
          <div className="row">
            <ProductConsumer>
              { value => {
                return value.products.map( product => {
                  return <Product key={product.id} product={product} />;
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
    //
    );
  }
}
