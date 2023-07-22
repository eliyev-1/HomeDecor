import React from 'react'

import "./collections.css"


function CollectionsComponent({collection}) {

  return (
    <div className="collections__cards__item">
      <div className="collections__cards__item__image">
        <img src={collection?.img} alt="" />
        <div className="collections__name">{collection?.name}</div>
      </div>
    </div>
  )
}

export default CollectionsComponent
