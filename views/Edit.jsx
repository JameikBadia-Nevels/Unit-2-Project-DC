const React = require('react')
//Using the app layout 
const DefaultLayout = require('./layout/Default.jsx')


class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit Page">  
        <link rel="stylesheet" href="/css/app.css"/>        
            {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
        <form action={`/comics/${this.props.product._id}?_method=PUT`} method="POST" >
            Title: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>

            Description: <input type="text" name="description"  defaultValue={this.props.product.description}/><br/>

            Img: <input type = "text" name = "img" defaultValue = {this.props.product.img}/> 
            <br/>

            Price: <input type = "text" name = "price" defaultValue = {this.props.product.price} /> <br/>

            Quantity: <input type = "text" name = "quantity" defaultValue = {this.props.product.qty} /> <br/>

            <input type="submit" value="Submit Changes"/>
            
        </form>
        <a href = '/comics'> Back </a>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit;