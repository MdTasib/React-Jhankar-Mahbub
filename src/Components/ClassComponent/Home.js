import React, { Component } from 'react';
import User from './User';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            cart: [],
        }
    }

    handleAddToCart(user) {
        const newCart = [...this.state.cart, user];
        this.setState({ cart: newCart });
        console.log(newCart);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
    }

    render() {
        const { users, cart } = this.state;
        return (
            <main style={{ textAlign: 'center' }}>
                <h1> Users: {users.length}</h1>
                <h2>Cart : {cart.length}</h2>
                {
                    users.map((user, index) => <User handleAddToCart={this.handleAddToCart.bind(this)} key={index} user={user} />)
                }
            </main>
        )
    }
}