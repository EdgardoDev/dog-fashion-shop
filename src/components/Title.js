import React from 'react'

export default function Title({name, title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center textTitle">
        <h2 className="font-weight-bold">
          {name} <strong className="textBlue">{title}</strong>
        </h2>
      </div>
    </div>
  )
}
