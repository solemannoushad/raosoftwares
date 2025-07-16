import Image from 'next/image'
import React from 'react'

function CustomImage({
    src,
    alt = "Devstella",
    width = 500,
    height = 500,
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
        { ...(placeholder === "blur" ? { blurDataURL: "" } : {}) }
        
    />
  )
}

export default CustomImage
