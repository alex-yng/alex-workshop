import Footer from "../components/Footer";
import GalleryWrapper from "../components/GalleryComponents/GalleryWrapper";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <>
      <Header title='Gallery' />
      <main className='w-full h-screen flex flex-col justify-center items-center'>
        <GalleryWrapper />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
