import React from 'react';
import { notFound } from 'next/navigation';
import Chapter1 from '@/components/textbook/content/Chapter1';
import Chapter2 from '@/components/textbook/content/Chapter2';
import Chapter3 from '@/components/textbook/content/Chapter3';
import Chapter4 from '@/components/textbook/content/Chapter4';
import Chapter5 from '@/components/textbook/content/Chapter5';
import Chapter6 from '@/components/textbook/content/Chapter6';
import Chapter7 from '@/components/textbook/content/Chapter7';
import Chapter8 from '@/components/textbook/content/Chapter8';
import Chapter9 from '@/components/textbook/content/Chapter9';
import Chapter10 from '@/components/textbook/content/Chapter10';
import Chapter11 from '@/components/textbook/content/Chapter11';
import Chapter12 from '@/components/textbook/content/Chapter12';

export function generateStaticParams() {
  return [
    { slug: '01-intro' },
    { slug: '02-anatomy' },
    { slug: '03-actuators' },
    { slug: '04-sensors' },
    { slug: '05-power' },
    { slug: '06-compute' },
    { slug: '07-control' },
    { slug: '08-vla' },
    { slug: '09-sim2real' },
    { slug: '10-safety' },
    { slug: '11-cases' },
    { slug: '12-future' },
  ];
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  switch (slug) {
    case '01-intro':
      return <Chapter1 />;
    case '02-anatomy':
      return <Chapter2 />;
    case '03-actuators':
      return <Chapter3 />;
    case '04-sensors':
      return <Chapter4 />;
    case '05-power':
      return <Chapter5 />;
    case '06-compute':
      return <Chapter6 />;
    case '07-control':
      return <Chapter7 />;
    case '08-vla':
      return <Chapter8 />;
    case '09-sim2real':
      return <Chapter9 />;
    case '10-safety':
      return <Chapter10 />;
    case '11-cases':
      return <Chapter11 />;
    case '12-future':
      return <Chapter12 />;
    default:
      return notFound();
  }
}
