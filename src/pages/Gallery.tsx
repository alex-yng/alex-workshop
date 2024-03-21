import Footer from "../components/Footer";
import Buttons from "../components/GalleryComponents/Buttons";
import GalleryWrapper from "../components/GalleryComponents/GalleryWrapper";
import Photo from "../components/GalleryComponents/Photo";
import PhotoBox from "../components/GalleryComponents/PhotoBox";
import Header from "../components/Header";

const Gallery = () => {
  let activeIndex = 0;

  return (
    <>
      <Header title='Gallery' />
      <main className='w-full h-screen flex flex-col justify-center items-center'>
        <GalleryWrapper activeIndex={activeIndex}>
          <PhotoBox>
            <Photo activeIndex={activeIndex} />
            <Buttons activeIndex={activeIndex} />
          </PhotoBox>
        </GalleryWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
