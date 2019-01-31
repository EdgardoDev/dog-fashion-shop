import React from 'react'

export default function CartColumns() {
  return <div className="container-fluid text-center d-none d-lg-block">
      <div className="row my-4">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"><i class="fas fa-images" /> product image</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"><i class="fas fa-file-signature"></i> product name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"><i class="fas fa-dollar-sign"></i> price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"><i class="fas fa-list-ol"></i> quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"><i class="fas fa-minus-circle"></i> remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"><i class="fas fa-poll-h"></i> total</p>
        </div>
      </div>
    </div>;
}

