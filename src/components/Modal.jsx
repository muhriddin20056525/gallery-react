import { IoCloseSharp } from "react-icons/io5";

export default function Modal({ fullSizeImage, isOpenModal, setIsOpenModal }) {
  return (
    <div className={`modal ${isOpenModal ? "show" : null}`}>
      <IoCloseSharp
        className="close-icon"
        onClick={() => setIsOpenModal(false)}
      />
      <img src={fullSizeImage} alt="image" />
    </div>
  );
}
