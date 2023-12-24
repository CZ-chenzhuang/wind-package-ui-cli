import React, { useState } from 'react'

const LikeBtn: React.FC = () => {
  const [like, setLike] = useState(0)
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>
        {like}👍
      </button>
      <div className='box'>box11</div>
      <div className='box2'>box2</div>
    </div>
  )
}

export default LikeBtn