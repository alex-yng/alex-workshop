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

export const fetchData = async (url: string): Promise<Stats> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
