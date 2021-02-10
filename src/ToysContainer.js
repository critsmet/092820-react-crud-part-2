import React from 'react'

import ToyCard from './ToyCard'

class ToysContainer extends React.Component{

  renderToys(){
    if (this.props.search !== ''){
      return this.props.toys.filter(toyObj => toyObj.name.includes(this.props.search)).map(this.renderSingleToyCard)
    } else {
      return this.props.toys.map(this.renderSingleToyCard)
    }
  }

  renderSingleToyCard = (toyObj) => {
    return <ToyCard key={toyObj.name + "-card"} id={toyObj.id} deleteToy={this.props.deleteToy} updateToyLike={this.props.updateToyLike} name={toyObj.name} image={toyObj.image} likes={toyObj.likes}/>
  }

  render(){
    return (
      <div id="toys-container">
        {this.renderToys()}
      </div>
    )
  }
}

export default ToysContainer
