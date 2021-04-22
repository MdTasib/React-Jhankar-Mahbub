import React, { Component } from 'react';

class User extends Component {
    render() {
        const { user, handleAddToCart } = this.props;
        return (
            <div>
                <h3>This is user: {user.name}</h3>
                <button onClick={() => handleAddToCart(user)}>ADD TO CART</button>
            </div>
        );
    }
}

export default User;