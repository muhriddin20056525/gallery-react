import React from "react";

export default function GalleryItem({
  id,
  alt_description,
  urls: { small },
  getSingleImage,
  setIsOpenModal,
}) {
  const handleClick = () => {
    getSingleImage(id);
    setIsOpenModal(true);
  };

  return (
    <div className="gallery-item" onClick={handleClick}>
      <img src={small} alt={alt_description} />
    </div>
  );
}
