import React, { Component } from 'react'
import Item from './Item'
import { observer, inject } from 'mobx-react'

class Market extends Component {
    constructor() {
        super()
        this.state = {
            newItem: ''
        }
    }

    handleInput = (e) => {
        this.setState({ newItem: e.target.value })
    }

    addItem = (e) => {
        if (e.key === 'Enter') {
            if (this.state.newItem !== '') {
                this.props.Inventory.addItem(this.state.newItem)
                this.setState({ newItem: '' })
            }
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInput} value={this.state.newItem} onKeyDown={this.addItem} placeholder='add item'/>
                {this.props.Inventory.items.map((i, k) => <Item item={i} key={k} />)}
                <h5>(click on items to set price)</h5>
                <div>num of items in store: {this.props.Inventory.numItems}</div>
            </div>
        )
    }
}

export default inject("Inventory")(observer(Market))