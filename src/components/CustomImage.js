import Image from 'next/image'
import React from 'react'

function CustomImage({
    src,
    alt = "Devstella",
    width,
    height,
    className,
    loading = "lazy",
    priority = false,
    placeholder = "empty"
}) {
  return (
    <Image 
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
        loading={loading}
        priority={priority}
        placeholder={placeholder}
    />
  )
}

export default CustomImage
