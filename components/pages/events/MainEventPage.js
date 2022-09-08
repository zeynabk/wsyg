import Image from 'next/image'

function MainEventPage({}) {
  return (
    <main className='md:min-h-screen relative '>
      <div className=''>
        <Image
          src='/events/bg.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='group'
        />
        <div className=' absolute w-full h-full bg-black opacity-80 md:pt-0 pt-8'>
          {' '}
        </div>
        <div className='md:absolute w-full h-full flex items-end md:pt-0 pt-8'>
          <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center px-4'>
            <div className='z-10 md:text-left text-center container mx-auto '>
              <h1 className='text-white lg:text-5xl md:text-4xl  sm:text-5xl   text-3xl capitalize font-black '>
                Change your Mind to become Success
              </h1>
              <p className=' text-sm font-light text-white px-2 py-1 my-4 rounded'>
                5 TO 9 MAY 2022, King Fahd Palace HOTEL, Dakar
              </p>
              <p className='text-white text-xl font-black'>
                <button className='border-2 rounded-md bg-gradient-to-br from-pink to-fuchsia-600  text-white px-12   py-2 hover:opacity-90 font-semibold'>
                  join us
                </button>
              </p>
            </div>
            <div className=' flex justify-center '>
              <Image
                src='/events/img1.png'
                alt='events'
                width='400'
                height='430'
                objectFit='cover'
                objectPosition='center'
                className='border mt-2'
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainEventPage
