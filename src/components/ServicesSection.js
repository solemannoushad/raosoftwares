import Heading from "./Heading"

function ServicesSection() {
  const services = [
    {
      icon: "app-service",
      name: "Mobile App\nDevelopment",
    },
    {
      icon: "web-service",
      name: "Web App\nDevelopment",
    },
    {
      icon: "ai-service",
      name: "Artificial\nIntelligence",
    },
    {
      icon: "hr-service",
      name: "Human\nResource",
    },
    {
      icon: "ui-service",
      name: "UI/UX\nDesigning",
    },
    {
      icon: "dm-service",
      name: "Digital\nMarketing",
    },
  ]

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Heading title={"Our"} heighlight={"Services"} />
      <div className="flex items-center justify-center flex-col relative">
        <img src="/icons/devstella.svg" className="absolute top-10" alt="Devstella" />
        <div className="mt-40 sm:mt-52 md:mt-64 lg:mt-72 mb-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer relative z-10 flex flex-col items-center gap-3 group mx-auto my-8"
              >
                <div className="bg-zinc-800 p-6 sm:p-8 rounded-2xl w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src={`/icons/${service.icon}.svg`} alt="" className="w-12 sm:w-14 md:w-16" />
                </div>
                <p className="text-white text-center text-xs sm:text-sm md:text-base whitespace-pre-line">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection

