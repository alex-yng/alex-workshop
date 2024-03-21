import Footer from "../components/Footer";
import GalleryWrapper from "../components/GalleryComponents/GalleryWrapper";
import PhotoBox from "../components/GalleryComponents/PhotoBox";
import Header from "../components/Header";

const Gallery = () => {
  const images = [
    {
      url: "string",
      title: "string",
      description: "string",
      alt: "string",
      isActive: true,
    },
    {
      url: "string",
      title: "string",
      description: "string",
      alt: "string",
      isActive: false,
    },
    {
      url: "string",
      title: "string",
      description: "string",
      alt: "string",
      isActive: false,
    },
  ];

  return (
    <>
      <Header title='Gallery' />
      <main className='w-full h-screen flex flex-col justify-center items-center'>
        <GalleryWrapper>
          <PhotoBox images={images} />
        </GalleryWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
