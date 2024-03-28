import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fetchData from "../lib/LeetcodeLogic/fetchData";
import { emptyLcStats } from "../constants";

const Leetcode = () => {
  const [stats, setStats] = useState(emptyLcStats);

  let username = "alicks111";

  useEffect(() => {
    let test = fetchData(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    test.then((data) => {
      setStats(data);
    });
  }, [username]);

  return (
    <>
      <Header />
      <main className='text-light h-screen grid place-items-center'>
        <h1 className='text-white text-9xl'>
          Problems Solved: {stats.totalSolved}
        </h1>
      </main>
      <Footer />
    </>
  );
};

export default Leetcode;
