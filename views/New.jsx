const React = require('react')

class New extends React.Component{
    render(){
        return (<div>
             <link rel="stylesheet" href="/css/app.css"/>  New Page
            <h1>New Comic Page</h1>
            <form action = "/comics" method = "POST">
            
            Title: <input type="text" name="name"/><br/>

            Description: <input type="text" name="description"  /><br/>

            Img: <input type = "text" name = "img"/> <br/>

            Price: <input type = "text" name = "price" /> <br/>

            Quantity: <input type = "text" name = "qty"/> <br/>

                <input type ="submit" name = "" value = "Create Comic"/>
            </form>
            <a href = '/comics'> Back </a>
        </div>
        )
    }
}

module.exports = New