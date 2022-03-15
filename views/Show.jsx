const React = require('react')

class Show extends React.Component{
    render(){
        //what we are passing to show/render on the page 
        const product = this.props.product
        return(
            <div>
                 <link rel="stylesheet" href="/css/app.css"/>  
            <h1>Show Page</h1>

            <strong>Cover</strong>:<br/> <img src ={product.img} /> <br/>

            <strong>Title</strong>: {product.name}<br/>

            <strong>Description</strong>: {product.description} <br/>

            <strong>Written By</strong>: {product.author} <br/>

            <strong>Artwork By</strong>: {product.art} <br/>

            <strong>Price</strong>: ${product.price}<br/>

            <strong>Quantity</strong>: {product.qty}<br/>

            <a href = '/comics'> Back </a>
            </div>
        )
    }
}

module.exports = Show