import React from 'react';

export default function ParallaxImage({image, title}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  )
}
