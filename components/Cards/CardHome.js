import { Fragment } from 'react'
import FontAwesome from '../fontAwesome/fontAwesome'
import allData from '../../data'
const Card = () => {
  return (
    <Fragment>
      {allData.map((data) => (
        <div
          key={data.id}
          className='bg-white text-noir  py-3 rounded-md filter drop-shadow'
        >
          <div className='w-11/12 m-auto'>
            <div className='text-left py-2 '>
              <FontAwesome className='' icon={data.icon} />
            </div>
            <div className=''>
              <h1 className='font-black text-xl my-2'>{data.title}</h1>
              <div className='text-noir'>{data.description}</div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allData,
    },
  }
}
export default Card
