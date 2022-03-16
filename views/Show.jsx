const React = require('react')

class Show extends React.Component{
    render(){
        //what we are passing to show/render on the page 
        const product = this.props.product
        return(
            <div class = "textShow">
                 <link rel="stylesheet" href="/css/app.css"/>  
            <h1>{product.name}</h1>

             <img class = 'picture' src ={product.img} /> <br/>

            <strong>Title:</strong> {product.name}<br/>

            <strong>Description:</strong> {product.description} <br/>

            <strong>Written By:</strong> {product.author} <br/>

            <strong>Artwork By:</strong> {product.art} <br/>

            <strong>Price:</strong> ${product.price}<br/>

            <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form class = "buy" action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
            

            <a href = '/comics'> Back </a>
            <br/>

            <a href={`/comics/${product._id}/edit`}>Edit This Comic</a> <br/>
            
            <form class = 'delete' action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                <input type = "submit" value = "DELETE"/> 

            </form>
            </div>
        )
    }
}

module.exports = Show