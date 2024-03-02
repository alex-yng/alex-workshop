import Header from "../components/Header";

export default function Error() {
  return (
    <>
      <Header />
      <div className="flex flex-col text-light font-light justify-center items-center mt-64 gap-4">
        <h1 className="text-8xl">Uh oh!</h1>
        <h2 className="text-4xl">Something unexpected happened. Sorry!</h2>
        <h3 className="text-xl">Error 404: Page not found.</h3>
      </div>
    </>
  );
}
