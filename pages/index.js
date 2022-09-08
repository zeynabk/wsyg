import FirstPage from '../components/pages/homepage/page1'
import { Fragment } from 'react'
import HeadTag from '../components/layout/HeadTag'

export default function Home() {
  return (
    <Fragment>
      <HeadTag name='Home' />
      <div className=''>
        <FirstPage />
      </div>
    </Fragment>
  )
}
