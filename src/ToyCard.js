import React from 'react'

class ToyCard extends React.PureComponent{

  componentDidUpdate(){
    console.log(this.props.name, " updated");
  }

  render(){
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img alt={"photo of " + this.props.name} src={this.props.image} className="toy-avatar"/>
        <p>{this.props.likes} Likes </p>
        <button onClick={(event) => this.props.updateToyLike(this.props.id)} className="like-btn">Like &lt;3</button>
        <button onClick={(event) => this.props.deleteToy(this.props.id)} className="like-btn">Delete</button>
      </div>
    )
  }

}

export default ToyCard
