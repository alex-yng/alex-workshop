import { emptyLcStats } from "../../constants";

interface Stats {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: any;
}

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data: Stats = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return emptyLcStats;
  }
};

export default fetchData;
