import React from 'react'
import ItemPage from './ItemPage'

class CartPage extends ItemPage{
    constructor(props){
        super(props);

        this.countItems = this.countItems.bind(this);
    }
    countItems(cart){
        let cartIds = [];
        let cartIdCount = {};
        for (let i = 0; i < cart.length; i++){
            if (cart[i].id in cartIds){
                cartIdCount[cart[i].id] += 1;
            }
            else{
                cartIds.push(cart[i].id);
                cartIdCount[cart[i].id] = 1;
            }
        }
        console.log("cartIdCount", cartIdCount);
        console.log("cartIds", cartIds);

        return cartIdCount;
    }

    netCart = (cart) =>{
        let cartIds = [];
        let netCart = [];

        for (let i=0; i < cart.length; i++){
            if(cart[i].id in cartIds){
                continue
            }
            else{
                cartIds.push(cart[i].id);
                netCart.push(cart[i]);
            }
        }
        return(netCart)
    };

    render(){
        let cartIdCounts = this.countItems(this.props.CartItems);
        let netCart = this.netCart(this.props.CartItems);

        return(
            <div>
                {netCart.map((item) => (
                    <CartItem key={item.id} item={item} count={cartIdCounts[item.id]}/>
                ))}
            </div>
            )
    }
}

class CartItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"ItemContainer"}>
                <div className={"ItemImage"}>
                    <img src={this.props.item.image}  alt={"product"} width={120}/>
                </div>

                <span className={"ItemName"}>
                    {this.props.item.name}
                </span>

                <span className={"ItemPrice"}>
                    {this.props.count} x ₹ {this.props.item.price}
                </span>

                <span className={"ItemDes"}>
                    {this.props.item.description}
                </span>
            </div>

        )
    }
}

export default CartPage;