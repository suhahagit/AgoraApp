import React from 'react'
import { observer, inject } from 'mobx-react'

const Item = (props) => {

  const item = props.item

  const buyItem = () => { props.Inventory.buyItem(item.name) }

  const changePrice = (name) => {
    let newPrice = prompt("enter new price")
    if (newPrice != null) {
      props.Inventory.changePrice(name, newPrice)
    }
  }

  return (
    <div>
      <li onClick={() => changePrice(item.name)}>{item.quantity} {item.name} available at ${item.price} per item</li>
      <button onClick={buyItem}>Buy</button>
    </div>
  )
}

export default inject("Inventory")(observer(Item))