import React from 'react'
import { Fragment } from 'react'
import GalleryPageContainer from '../../components/pages/gallery'
import allGallery from '../../data/gallery.json'
import HeadTag from '../../components/layout/HeadTag'
const GalleryPage = ({ data }) => {
  return (
    <Fragment>
      <HeadTag name='Gallery' />
      <GalleryPageContainer data={data} />
    </Fragment>
  )
}

export default GalleryPage

export async function getStaticProps() {
  const data = allGallery.gallery
  return {
    props: { data },
  }
}
