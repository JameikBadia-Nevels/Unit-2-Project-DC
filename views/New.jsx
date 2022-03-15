const React = require('react')

class New extends React.Component{
    render(){
        return (<div>
             <link rel="stylesheet" href="/css/app.css"/>  New Page
            <h1>New Comic Page</h1>
            <form action = "/comics" method = "POST">
            
            <strong>Title</strong>: <input type="text" name="name"/><br/>

            <strong>Description</strong>: <input type="text" name="description"  /><br/>

            <strong>Written By</strong>: <input type = 'text' name = 'author' /> <br/>

            <strong>Artwork By</strong>: <input type = "text" name = 'art'/><br/>

            <strong>Cover</strong>: <input type = "text" name = "img"/> <br/>

            <strong>Price</strong>: <input type = "text" name = "price" /> <br/>

            <strong>Quantity</strong>: <input type = "text" name = "qty"/> <br/>

                <input type ="submit" name = "" value = "Create Comic"/>
            </form>
            <a href = '/comics'> Back </a>
        </div>
        )
    }
}

module.exports = New