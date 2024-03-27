import Footer from "../components/Footer";
import Header from "../components/Header";
import fetchData from "../lib/LeetcodeLogic/fetchData";

const Leetcode = () => {
  const username = "alicks111";
  const stats = fetchData(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );
  return (
    <>
      <Header />
      <main className='text-light h-screen grid place-items-center'>
        Leetcode Tracker
      </main>
      <Footer />
    </>
  );
};

export default Leetcode;
