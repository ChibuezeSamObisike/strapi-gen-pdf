'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export type IArticleRatioData = {
  year: string;
  ratio: number;
};

export default function ArticleCountRatioChart({
  data,
}: {
  data: IArticleRatioData[];
}) {
  return (
    <div className='w-full h-[400px] bg-white p-10 rounded-2xl shadow'>
      <h2 className='text-xl font-bold mb-4'>Article Count Ratio by Year</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <XAxis dataKey='year' />
          <YAxis unit='%' />
          <Tooltip />
          <Bar dataKey='ratio' fill='#4845fe' radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
