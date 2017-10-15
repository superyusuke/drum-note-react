import React from 'react'

const divStyles = {
  display: 'flex',
  flexDirection: 'column'
}

const ComponentCell = ({onChange, upper, lower}) => {
  return (
    <div style={divStyles}>
      <input type='text' name='upper' onChange={(e) => {
        onChange(e.target.value, e.target.name)
      }} value={upper} />
      <input type='text' name='lower' onChange={(e) => {
        onChange(e.target.value, e.target.name)
      }} value={lower} />
    </div>
  )
}

export default ComponentCell
