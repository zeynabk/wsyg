import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import GalleryPageContainer from "../../components/pages/gallery";
import allGallery from "../../data/gallery.json";
import HeadTag from "../../components/layout/HeadTag";
import { getFolders, mapImageResources, search } from "../../lib/cloudinary";
const GalleryPage = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  totalCount: defaultTotalCount,
}) => {
  const [totalCount, setTotalCount] = useState(defaultTotalCount);

  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  async function handleOnLoadMore(e) {
    e.preventDefault();

    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        // expression: `folder=""`,
        nextCursor,
      }),
    }).then((r) => r.json());

    const {
      resources,
      next_cursor: nextPageCursor,
      total_count: updatedTotalCount,
    } = results;

    const images = mapImageResources(resources);
    setImages((prev) => {
      return [...prev, ...images];
    });
    setNextCursor(nextPageCursor);
    setTotalCount(updatedTotalCount);
  }
  return (
    <Fragment>
      <HeadTag name="Gallery" />
      <GalleryPageContainer data={images} />
      <p>
        <button onClick={handleOnLoadMore}>Load More Results</button>
      </p>
    </Fragment>
  );
};

export default GalleryPage;

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  });
  const {
    resources,
    next_cursor: nextCursor,
    total_count: totalCount,
  } = results;

  const images = mapImageResources(resources);
  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      totalCount,
    },
  };
}
