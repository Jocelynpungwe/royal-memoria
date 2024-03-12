import React, { useState } from 'react'

function MyDropdown() {
  const [dropdown, setDropdown] = useState(false)

  function handleClick() {
    setDropdown(!dropdown)
  }

  return <div>dropdown</div>
}

export default MyDropdown
