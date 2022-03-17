const React = require('react')

class New extends React.Component{
    render(){
        return (
        <div>
             <link rel="stylesheet" href="/css/app.css"/>
            <header>
            <a  className = 'back' href = '/comics'> ⬅️ Back </a>
            <h1>New Comic Page</h1>
            </header>

            <form class = "form " action = "/comics" method = "POST">
            
            <strong>Title:</strong> <input type="text" name="name"/><br/>

            <strong>Description:</strong> <input type="text" name="description"  /><br/>

            <strong>Written By:</strong> <input type = 'text' name = 'author' /> <br/>

            <strong>Artwork By:</strong> <input type = "text" name = 'art'/><br/>

            <strong>Cover Page:</strong> <input type = "text" name = "img"/> <br/>

            <strong>Price:</strong> <input type = "text" name = "price" /> <br/>

            <strong>Quantity:</strong> <input type = "text" name = "qty"/> <br/>
            
            <strong>Main Character:</strong> <input type = "text" name = "mc"/> <br/>

                <input className = "submitButton" type ="submit" name = "" value = "Create Comic"/>
            </form>

            
        </div>
        )
    }
}

module.exports = New