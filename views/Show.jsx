const React = require('react')

const dark = {
    color: 'maroon'
}
const purp = {
    color: 'rebeccapurple'
}
const golden = {
    color: 'goldenrod' 
}/*booster*/
const greens = {
    color: 'olivedrab' /*lanter*/
}
const sea = {
    color:'seagreen' /*aquaman*/
}
const blues = {
    color: 'royalblue' /*nightwing*/
}
const robins = {
    color: 'firebrick' /*robin*/
}
const MTO = {
    color: '#3772FF'
}
class Show extends React.Component{
    render(){
        const product = this.props.product
        
        if (product.mc == 'batman'){
            return (
                // blackText
            <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {dark} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        if (product.mc == 'batgirl' || product.mc == 'huntress'){
            return (
                <div>
                <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
             <h1>{product.name}</h1>
        
        
                <link rel="stylesheet" href="/css/app.css"/>  
       
            <div className='picShow'>
            <img class = 'picture' src ={product.img} /> <br/>
            </div>
            <br/><br/>

            
            <div style = {purp} className= "textShow">
            
            <strong>Title:</strong> {product.name}<br/>

            <strong>Description:</strong> {product.description} <br/>

            <strong>Written By:</strong> {product.author} <br/>

            <strong>Artwork By:</strong> {product.art} <br/>

            <strong>Price:</strong> ${product.price}<br/>

            <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

             
            <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
            {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
            </form> <br/> 
          
            
            <br/>
            <br/>

             <br/>
            <br/>
        
            <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                <input className = "delete" type = "submit" value = "DELETE"/> 

            </form>
        </div>
        
    </div>
            )
        }
        if (product.mc == 'green arrow' || product.mc == 'green lantern' || product.mc == 'martian manhunter'){
            return (
                <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {greens} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        if(product.mc == 'robin' || product.mc == 'speedy' || product.mc == 'red hood' || product.mc == 'red robin' || product.mc == 'flash' || product.mc == 'shazam'){
            return(
                <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {robins} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        if(product.mc == 'nightwing' || product.mc == 'blue beetle' || product.mc == 'static' || product.mc == 'atom' || product.mc == 'superman' || product.mc == 'aqualad'){
            return(
                <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {blues} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        if(product.mc == 'booster gold' || product.mc == 'wonder woman'){
            return(
                <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {golden} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        if(product.mc == 'aquaman'){
            return(
                <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {sea} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        if(product.mc == 'MTO'){
            return(
                <div>
                    <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                    <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div style = {MTO} className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
            )
        }
        // r
        //what we are passing to show/render on the page 
        
        return(

        <div>
                <a  className = 'back' href = '/comics'> ⬅️ Back </a> <a className = "edit" href={`/comics/${product._id}/edit`}>Edit This Comic🖋</a>
                 <h1>{product.name}</h1>
            
            
                 <link rel="stylesheet" href="/css/app.css"/>  
           
                <div className='picShow'>
                <img class = 'picture' src ={product.img} /> <br/>
                </div>
                <br/><br/>

                
                <div className= "textShow">
                
                <strong>Title:</strong> {product.name}<br/>

                <strong>Description:</strong> {product.description} <br/>

                <strong>Written By:</strong> {product.author} <br/>

                <strong>Artwork By:</strong> {product.art} <br/>

                <strong>Price:</strong> ${product.price}<br/>

                <strong>Quantity:</strong> {product.qty > 0 ? product.qty: 'Out of Stock'}<br/>

                 
                <form  action = {`/comics/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input className = "buy" type = "submit" value = "BUY"/>: null} 
                </form> <br/> 
              
                
                <br/>
                <br/>

                 <br/>
                <br/>
            
                <form  action = {`/comics/${product._id}?_method=DELETE`} method="POST">

                    <input className = "delete" type = "submit" value = "DELETE"/> 

                </form>
            </div>
            
        </div>
        )
    }
}

module.exports = Show