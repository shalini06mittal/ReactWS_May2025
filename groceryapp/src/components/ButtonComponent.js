import React from 'react'


export default 
function ButtonComponent(props) {
    console.log(props);
    
  return (
    <>
        <button onClick={props.change}>
            {props.label}</button>
    </>
  )
}
