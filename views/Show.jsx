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

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
            

                <a  className = 'back' href = '/comics'> ⬅️ Back </a>
            <br/>
            <br/>
            <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic</a> <br/>
            <br/>
            
            <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                <input className = "delete" type = "submit" value = "DELETE"/> 

            </form>
            </div>
        )
    }
}

module.exports = Show