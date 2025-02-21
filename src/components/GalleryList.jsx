import React from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryList({
  images,
  getSingleImage,
  setIsOpenModal,
}) {
  return (
    <div className="gallery-list">
      {images.length ? (
        images.map((item) => (
          <GalleryItem
            key={item.id}
            getSingleImage={getSingleImage}
            setIsOpenModal={setIsOpenModal}
            {...item}
          />
        ))
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
}
