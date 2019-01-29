import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return <div className="container py-2">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-4">
                  <h3 className="textTitle">{title}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid imgDetail" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>item : {title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">
                      {company}
                    </span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="mt-3 mb-0 text-capitalize font-weight-bold">
                    product information:
                  </p>
                  <p className="text-muted">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer className="mb-2">
                        <i className="fas fa-arrow-alt-circle-left" /> BACK TO PRODUCTS
                      </ButtonContainer>
                    </Link>
                  <ButtonContainer className="mb-2"
                    disabled={inCart ? true:false} onClick={() => {
                      value.addItemToCart(id);
                      value.openModal(id);
                    }}
                    >
                    <i className="fas fa-check-square"></i> {inCart ? "IN YOUR CART" : "ADD TO CART"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>;
        }}
      </ProductConsumer>
    );
  }
}
