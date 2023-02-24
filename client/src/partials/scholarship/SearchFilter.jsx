import React, {useState} from 'react'

const SearchFilter = ({onSearch}) => {

  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  }
  return (
    <form className='mb-20' onSubmit={handleSubmit}>
      <div className="container mx-20">
      <input
        type="text" value={query} onChange={handleChange} />
      <button className=' btn bg-stone-700 text-white mx-10' type='submit'>Search</button>
      </div>
    </form>
  )
}

export default SearchFilter