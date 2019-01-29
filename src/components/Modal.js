import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {modalOpened, closeModal} = value;
          const {img, title, price} = value.modalItem;
          if(!modalOpened) {
            return null;
          } else {
            return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-5 text-center p-5">
                    <h5 className="titleModal">
                      <i className="fas fa-check-square" />  ITEM ADDED TO THE CART
                    </h5>
                    <img src={img} className="img-fluid my-3" alt="modal" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : ${price}</h5>
                    <Link to="/">
                      <ButtonContainer className="btn-sm btn-block mb-2" onClick={() => closeModal()}>
                        <i className="fas fa-cart-arrow-down"></i> CONTINUE SHOPPING
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer className="btn-sm btn-block" onClick={() => closeModal()}>
                        <i className="fas fa-shopping-cart"></i> GO TO YOUR CART
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  a {
    text-decoration: none !important;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  .titleModal {
    background: var(--lightBlue);
    color: var(--mainWhite);
    padding: 5px;
  }

  /*@media (max-width: 475px) {
    .titleModal {
      font-size: 15px;
    }
  }*/
`;
