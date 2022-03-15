const React = require('react')

class Show extends React.Component{
    render(){
        //what we are passing to show/render on the page 
        const product = this.props.product
        return(
            <div>
                 <link rel="stylesheet" href="/css/app.css"/>  
            <h1>Show Page</h1>

            Img:<br/> <img src ={product.img} /> <br/>

            Title: {product.name}<br/>

            Description: {product.description}<br/>

            Price: ${product.price}<br/>

            Quantity: {product.qty}<br/>

            <a href = '/comics'> Back </a>
            </div>
        )
    }
}

module.exports = Show