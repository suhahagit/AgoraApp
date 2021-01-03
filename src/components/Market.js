import React, { Component } from 'react'
import Item from './Item'
import { observer } from 'mobx-react'

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
                this.props.store.addItem(this.state.newItem)
                this.setState({ newItem: '' })
            }
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInput} value={this.state.newItem} onKeyDown={this.addItem} placeholder='add item'/>
                {this.props.store.items.map((i, k) => <Item item={i} key={k} store={this.props.store} />)}
                <h5>(click on items to set price)</h5>
            </div>
        )
    }
}

export default observer(Market)