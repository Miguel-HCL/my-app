import React from 'react'; 

function ItemList({item}){
  return(
    <ul>
      <li>{`# ${item}`}</li>
    </ul>
  )
}

export default ItemList;