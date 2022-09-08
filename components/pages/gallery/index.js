import React from 'react'
import { Fragment } from 'react'
import HeadTag from '../../../components/layout/HeadTag'
import SearchImage from './search'
import Image from 'next/image'
import ImageItem from './ImageItem'
import { useState } from 'react'
const GalleryPageContainer = ({ data }) => {
  const [term, setTerm] = useState('')
  const searchData = data.filter(
    (d) =>
      d.name.toLowerCase().includes(term.toLowerCase()) ||
      d.description.toLowerCase().includes(term.toLowerCase())
  )
  return (
    <Fragment>
      <HeadTag name='Gallery' />
      <main className=' min-h-screen relative '>
        <div className=''>
          <Image
            src='/gallery/group.jpg'
            layout='fill'
            objectFit='cover'
            objectPosition='bottom'
            alt='group'
          />
          <div className=' absolute w-full h-full bg-black opacity-40'> </div>
          <div className='absolute w-full h-full flex justify-center items-center'>
            <SearchImage
              searchText={(text) => {
                setTerm(text)
              }}
            />
          </div>
        </div>
      </main>
      <div className='bg-pink py-8 px-4'>
        <h1 className='text-white md:text-2xl text-xl font-black container mx-auto mb-8'>
          Latest Project
        </h1>
        <div className=' grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 container mx-auto transition transform duration-1000 ease-in-out'>
          {searchData.map((d) => (
            // <p key={d.id}>{d.name}</p>
            <ImageItem
              key={d.id}
              name={d.name}
              description={d.description}
              date={d.date}
              src={d.src}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default GalleryPageContainer
