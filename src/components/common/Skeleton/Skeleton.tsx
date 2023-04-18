import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={315}
    height={465}
    viewBox='0 0 315 465'
    backgroundColor='#ecebeb'
    foregroundColor='#ecebeb'
  >
    <circle cx='159' cy='122' r='96' />
    <rect x='28' y='247' rx='5' ry='5' width='199' height='22' />
    <rect x='29' y='284' rx='4' ry='4' width='256' height='35' />
    <rect x='28' y='405' rx='4' ry='4' width='65' height='22' />
    <rect x='173' y='390' rx='16' ry='16' width='121' height='51' />
  </ContentLoader>
);

export default Skeleton;
