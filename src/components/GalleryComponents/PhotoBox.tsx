const PhotoBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      {children}
    </div>
  );
};

export default PhotoBox;
