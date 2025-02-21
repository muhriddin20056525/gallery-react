import React, { useEffect, useState } from "react";
import { getAllImage, searchImage } from "./api/api";
import Search from "./components/Search";
import GalleryList from "./components/GalleryList";
import Modal from "./components/Modal";

export default function App() {
  const [images, setImages] = useState([]);
  const [fullSizeImage, setFullSizeImage] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  // get 30 image
  useEffect(() => {
    getAllImage().then((data) => setImages(data));
  }, []);

  // search image
  const getSearchImageTitle = async (title) => {
    if (!title) return alert("Searched title not found");
    await searchImage(title).then((data) => setImages(data));
  };

  // get click image
  const getSingleImage = (id) => {
    const clickedImage = images.filter((item) => item.id === id);

    if (clickedImage) {
      setFullSizeImage(clickedImage[0].urls.regular);
      setIsOpenModal(true);
    }
  };

  return (
    <div className="gallery">
      <Search getSearchImageTitle={getSearchImageTitle} />
      <GalleryList
        images={images}
        getSingleImage={getSingleImage}
        setIsOpenModal={setIsOpenModal}
      />

      <Modal
        fullSizeImage={fullSizeImage}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
}
