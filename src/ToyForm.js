import React from 'react'

class ToyForm extends React.PureComponent{

  state = {
    name: '',
    image: ''
  }

  componentDidUpdate(){
    console.log("The component updated");
  }

  //Controlled forms hold values in state, and when the form is submitted, state values are used to create a new instance rather than values from the input field
  //Input fields have values that reflect state, rather than being freely typed

  //This is a callback function we're passing to an HTML element as the callback to an event listener, so it must be an arrow function
  handleOnChange = (event) => {
    let value = event.target.value
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToy({name: this.state.name, image: this.state.image, likes: 0})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name}/>
          <br/>
          <label>Image URL</label>
          <input onChange={this.handleOnChange} type="text" name="image" value={this.state.image}/>
          <br/>
          <input type="submit" value="Make That Toy!"/>
        </form>
      </div>
    )
  }
}

export default ToyForm
