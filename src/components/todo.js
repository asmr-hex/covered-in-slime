import React from 'react'


export const Todo = props => {
  const {data} = props

  return (
    <div
      dangerouslySetInnerHTML={{__html: data.html}}
      />
  )
}
