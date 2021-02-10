import React from 'react'

function SearchBar(propsObj){

  function handleSubmit(e){
    e.preventDefault()
    let value = e.target["toy-input"].value
    propsObj.changeStateValue(value)
  }

  return (
    <div id="search-bar">
        <form onSubmit={handleSubmit} id="search">
          <input name="toy-input" type="text" />
          <input type="submit" value="Search!" />
        </form>
    </div>
  )
}

export default SearchBar
