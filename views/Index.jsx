const React = require('react')

class Index extends React.Component{
    render(){
        //destructuring 
        // const {products} = this.props.product
        return(
            <div>
                 <link rel="stylesheet" href="/css/app.css"/>  
                <h1>Comic Index Page</h1>
                <ul>
                    {this.props.products.map((product, i) => {
                        return(
                            <li key = {i}>
                                Img:<br/> <img src ={product.img} width = '170' height = '262' />
                                <br/>

                                Title: <a href = {`/comics/${product.id}`}> {product.name}</a>
                                {' '} <br/>
                                Description: {product.description} <br/>

                                Price: ${product.price}
                                <br/>

                                Quantity: {product.qty}
                                <br/>

                                <a href={`/comics/${product._id}/edit`}>Edit This Comic</a>

                                <form action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                                    <input type = "submit" value = "DELETE"/> 

                                </form>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/comics/new'>Create a New Comic</a>
                </nav>
            </div>
        )
    }
}

module.exports= Index