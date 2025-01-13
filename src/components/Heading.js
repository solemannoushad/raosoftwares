import React from 'react'

function Heading({title, heighlight}) {
  return (
    <h1 className="text-white text-4xl uppercase">{title} <span className="text-foreground font-semibold">{heighlight}</span></h1>
  )
}

export default Heading
