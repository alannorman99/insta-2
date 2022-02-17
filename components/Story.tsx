import React from 'react'

function Story({ img, username }: any) {
  return (
    <div>
      <img src={img} alt="" />
      <p>{username}</p>
    </div>
  )
}

export default Story
