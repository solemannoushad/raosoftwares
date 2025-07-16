
const TestimonialCard = ({ name, title, testimonial, imageUrl }) => {
  return (
    <div className="mr-6 rounded-lg bg-foreground p-4 text-white max-w-sm w-[24rem]">
      <div className="flex flex-col">
        {/* Profile Image with hand-drawn border effect */}
        <div className="w-20 h-20 bg-white rounded-full relative overflow-hidden mb-2">
        <img src={`/images/${imageUrl}`} alt={name} className="rounded-full object-cover relative z-10" />
        </div>

        {/* Name and Title */}
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <h3 className="text-lg mb-2 font-medium">{title}</h3>

        {/* Testimonial Text */}
        <p className="text-base leading-relaxed">{testimonial}</p>
      </div>
    </div>
  )
}

export default TestimonialCard

