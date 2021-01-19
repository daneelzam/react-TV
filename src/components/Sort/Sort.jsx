import React from 'react';

function Sort({ catalog, setSortedList }) {
  const sortPosts = ({ target: { value } }) => {
    if (value === 'Up') {
      return setSortedList([...catalog.sort((a, b) => a.Size - b.Size)]);
    }
    if (value === 'Down') {
      return setSortedList([...catalog.sort((a, b) => b.Size - a.Size)]);
    }
    return value;
  };
  return (
    <div>
      <label htmlFor="sort">Size</label>
      <select name="sort" onChange={sortPosts}>
        <option>Up</option>
        <option>Down</option>
      </select>
    </div>
  );
}

export default Sort;
