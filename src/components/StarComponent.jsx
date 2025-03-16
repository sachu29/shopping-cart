import React from 'react'
import {Rate} from 'antd'
const StarComponent = ({rating}) => {
  return (
      <>
          <Rate allowHalf defaultValue={rating || 2.5} />
    </>
  )
}

export default StarComponent