import React from 'react'
import Form from './form'
import Image from 'next/image'
import InfoCard from '../../Cards/InfoCard'
const src = '/img/contact.svg'
const FourthPage = () => {
  return (
    <>
      {/* <div className='FourthPage'>akhad is coming</div> */}
      <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 justify-center items-center  '>
        <Form />
        <div className=' md:justify-self-end w-full h-full'>
          <div className='grid grid-cols-1  pt-10 '>
            <div className='h-auto justify-self-center'>
              <Image
                className='text-vertClair'
                src={src}
                alt='contact us'
                layout='intrinsic'
                objectFit='container'
                width={300}
                height={300}
                priority
              />
            </div>

            <div className='border-b-2 pb-5 border-white md:px-0 px-4 h-auto tracking-wider grid lg:grid-cols-3 lg:gap-0 gap-4 grid-cols-2 justify-center md:mb-0 mb-10 '>
              <div className='address justify-self-start'>
                <h1 className='font-bold mb-2 text-lg'>Address</h1>
                <p className='font-italic font-light text text-sm'>
                  NY, United States
                </p>
              </div>
              <div className='phone justify-self-center'>
                <h1 className='font-bold mb-2 text-lg'>Phone</h1>
                <p className='font-italic font-light text text-sm'>
                  +221 77 123 45 67
                </p>
              </div>
              <div className='email lg:justify-self-end justify-self-start'>
                <h1 className='font-bold mb-2 text-lg'>Phone</h1>
                <p className='font-italic font-light text text-sm'>
                  test@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Donate /> */}
      <div className='  my-8  rounded-xl '>
        <h1 className='uppercase text-white text-5xl font-black py-5 text-center'>
          Testimonials
        </h1>
      </div>
      <div className='container mx-auto grid md:grid-cols-3 gap-4 sm:grid-cols-2  px-4'>
        <InfoCard
          image='/work/work1.jpg'
          title='Social'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti'
        />
        <InfoCard
          image='/work/work2.jpg'
          title='Telehealth'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti'
        />
        <InfoCard
          image='/work/work3.jpg'
          title='Workforce'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti'
        />
        <InfoCard
          image='/work/work1.jpg'
          title='Social'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti'
        />
        <InfoCard
          image='/work/work2.jpg'
          title='Telehealth'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti'
        />
        <InfoCard
          image='/work/work3.jpg'
          title='Workforce'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident earum corrupti'
        />
      </div>
      <div className='h-10 bg-pink'></div>
    </>
  )
}

export default FourthPage
