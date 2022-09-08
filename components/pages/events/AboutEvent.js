import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
const pr4 = '/team/realTeam/Yolande_wpsyg.jpg'
const AboutEvent = () => {
  return (
    <div>
      <div className='container mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 py-16 relative justify-center items-center'>
          <div className='md:block flex justify-center'>
            <Image
              src={pr4}
              alt='events'
              width='400'
              height='430'
              objectFit='cover'
              objectPosition='center'
              className='border mt-2 rounded'
            />
          </div>
          <div>
            <h1 className='font-black text-3xl'>About this Conference</h1>
            <p className='opacity-90 leading-relaxed my-4 '>
              When I first got into the online advertising business, I was
              looking for the magical combination that would put my website into
              the top search engine rankings, catapult me to the forefront of
              the minds or individuals looking to buy my product, and generally
              make me rich beyond my wildest dreams! After succeeding in the
              business for this long, I’m able to look back on my old self with
              this kind of thinking and shake my head.
            </p>
            <ul className='opacity-90  '>
              <li>
                <FontAwesomeIcon
                  icon='fa-solid fa-check'
                  className='mr-4 text-green-500'
                />{' '}
                Write On Your Business Card
              </li>
              <li>
                <FontAwesomeIcon
                  icon='fa-solid fa-check'
                  className='mr-4 text-green-500'
                />
                Advertising Outdoors
              </li>
              <li>
                <FontAwesomeIcon
                  icon='fa-solid fa-check'
                  className='mr-4 text-green-500'
                />{' '}
                Effective Advertising Pointers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutEvent
