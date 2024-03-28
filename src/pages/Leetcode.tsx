import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fetchData from "../lib/LeetcodeLogic/fetchData";

const Leetcode = () => {
  let username = "alicks111";
  let stats = {
    status: "",
    message: "",
    totalSolved: 0,
    totalQuestions: 0,
    easySolved: 0,
    totalEasy: 0,
    mediumSolved: 0,
    totalMedium: 0,
    hardSolved: 0,
    totalHard: 0,
    acceptanceRate: 0,
    ranking: 0,
    contributionPoints: 0,
    reputation: 0,
    submissionCalendar: [],
  };
  useEffect(() => {
    fetchData(`https://leetcode.com/${username}/`).then((data) => {
      stats = data;
    });
  }, [username]);

  return (
    <>
      <Header />
      <main className='text-light h-screen grid place-items-center'>
        <h1 className='text-white text-9xl'>{stats.totalSolved}</h1>
      </main>
      <Footer />
    </>
  );
};

export default Leetcode;
