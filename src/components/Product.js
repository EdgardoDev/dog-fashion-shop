import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';


export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
            <div className="img-container p-5" onClick={() => value.processDetails(id)}>
              <Link to="/details">
                <img src={img} alt="Product Detail" className="card-img-top" />
              </Link>
              <button
                className="buttonCart"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addItemToCart(id);
                  value.openModal(id);
                }}>
                {inCart ? (
                  <p className="mb-0 btnCartText" disabled>
                    <i className="fas fa-check-square"></i></p>
                ) : (
                    <i className="fas fa-cart-plus" />
                  )}
              </button>
            </div>
            )} 
          </ProductConsumer>     
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
                {title}
            </p>
            <h5 className="textBlue mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Here we define the PropTypes
Product.propTypes = {
  product: PropTypes.shape ({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 2px rgba(179, 157, 219, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.3s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.4);
  }

  .buttonCart {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.2rem;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }

  .img-container:hover .buttonCart {
    transform: translate(0, 0);
  }

  .buttonCart:hover {
    color: var(--lightPurple); 
    cursor: pointer;
  }
`;
