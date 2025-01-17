import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { content } from '@/constants/content'

function SolutionsSection() {

  const cards = content['solutions'].cards;

  return (
    <div>
      <Heading title={"Solutions"} heighlight={"We Provide"} />
      <h2 className='text-white mt-3 italic'><span className='text-foreground'>" </span>Your Partner in Digital Transformation<span className='text-foreground'> "</span></h2>
      <div className="my-10 flex flex-wrap">
        {
          cards.map((card) => {
            return(
              <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
            )
          })
        }

      </div>
    </div>
  )
}

export default SolutionsSection
