import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

export const getAllReports = async () => {
  const res = await fetch(`http://localhost:1337/api/reports?populate=*`);
  return res.json();
};

export const getSingleReport = async (id: number | string) => {
  const res = await fetch(
    `http://localhost:1337/api/reports/${id}?populate[0]=articles.picture&populate[1]=topfeature.icon&populate[2]=graphs&populate[3]=topstats&populate[4]=about`
  );
  return res.json();
};
