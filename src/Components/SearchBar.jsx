import React from 'react'

function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <div>
        <input type='text'
        placeholder='Search Tasks...'
        value = {searchTerm}
        onChange={(e )=> setSearchTerm(e.target.value)}/>
    </div>
  )
}

export default SearchBar