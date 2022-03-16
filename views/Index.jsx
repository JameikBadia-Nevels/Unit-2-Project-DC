const React = require('react')

class Index extends React.Component{
    render(){
        //destructuring 
        // const {products} = this.props.product
        return(
            <div>
                 <link rel="stylesheet" href="/css/app.css"/>  
                 <header class = "header"></header>
                 <br/>
                <h1>DC One Stop Comic Stop</h1>
                
                <div>
                    {this.props.products.map((product, i) => {
                        return(

                            <div class = "picIndex" key = {i}>

                                 <img class = 'picture'src ={product.img} width = '170' height = '262' />
                                <br/>
                            
                                <div class = "textIndex">
                                    <strong>Title:</strong> <a href = {`/comics/${product.id}`}> {product.name}</a>
                                    {' '} <br/>
                                    {/* Description: {product.description} <br/> */}

                                    <strong>Price:</strong> ${product.price}
                                    <br/>

                                    <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}
                                    <br/>

                                </div>


                            </div>
                        )
                    })}
                </div>
                <nav>
                    <a href='/comics/new'>Create a New Comic</a>
                </nav>
            </div>
        )
    }
}

module.exports= Index