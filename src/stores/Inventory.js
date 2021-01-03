import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action
        })
    }

    addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find(i => i.name === name)
        if (item) {
            item.quantity = item.quantity + 1
        } else {
            item = new Item(name, price, quantity)
            this.items.push(item)
        }
    }

    buyItem = (name) => {
        let itemIndex = this.items.findIndex(i => i.name === name)
        if(this.items[itemIndex].quantity === 1){
            this.items.splice(itemIndex, 1)
        }else{
            this.items[itemIndex].quantity = this.items[itemIndex].quantity - 1
        }
    }

    changePrice = (name, newPrice) => { 
        let item = this.items.find(i => i.name === name)
        item.price = newPrice
    }
}