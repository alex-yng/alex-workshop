import Footer from "../components/Footer";
import GalleryWrapper from "../components/GalleryComponents/GalleryWrapper";
import PhotoBox from "../components/GalleryComponents/PhotoBox";
import Header from "../components/Header";
import { images } from "../constants";

const Gallery = () => {
  return (
    <>
      <Header title='Gallery' />
      <main className='w-full h-screen flex flex-col justify-center items-center'>
        <GalleryWrapper images={images} />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
