import Image from "next/image"

function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-background z-50 flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image  src="/loading.gif" alt="Loading..." fill style={{ objectFit: "cover" }} priority unoptimized />
      </div>
    </div>
  )
}

export default Loading

