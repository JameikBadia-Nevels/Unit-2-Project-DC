const React = require('react')

class Index extends React.Component{
    render(){
        //destructuring 
        // const {products} = this.props.product
        return(
            <div>
                 <link rel="stylesheet" href="/css/app.css"/>  
                 <header className= "header"></header>
                 <br/>
                <h1>DC Comic Shop</h1>
                
                <div className='og'>
                    {this.props.products.map((product, i) => {
                        return(

                            <div className="picIndex" key = {i}>

                                 <img className= 'picture'src ={product.img} width = '170' height = '262' />
                                <br/>
                            
                                <p className ="textIndex">
                                    <strong>Title:</strong> <a href = {`/comics/${product.id}`}> {product.name}</a>
                                    {' '} <br/>
                                    {/* Description: {product.description} <br/> */}

                                    <strong>Price:</strong> ${product.price}
                                    <br/>

                                    <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}
                                    <br/>

                                </p>


                            </div>
                        )
                    })}
                </div>
                <nav >
                    <a className='create' href='/comics/new'>Create a New Comic</a>
                </nav>
            </div>
        )
    }
}

module.exports= Index