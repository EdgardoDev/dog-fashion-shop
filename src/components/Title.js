import React from 'react'

export default function Title({name, title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-1 text-center textTitle">
        <h3 className="font-weight-bold">
          {name} <strong className="textBlue">{title}</strong>
        </h3>
      </div>
    </div>
  )
}
