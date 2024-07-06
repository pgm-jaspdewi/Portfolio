'use client';

import React, { useEffect, useState } from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

type GridItem = {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};

const Grid = () => {

  const getViewportSize = () => {
    if (typeof window === 'undefined') return 'lg';
    const width = window.innerWidth;
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    return 'sm';
  };

  const reorderItems = (items: GridItem[], viewportSize: string): GridItem[] => {
    switch (viewportSize) {
      case 'lg':
        return [...items];
      case 'md':
        return [...items];
      default:
        return [items[0], items[1], items[3], items[2]];
    }
  };

  const [viewportSize, setViewportSize] = useState<string>(getViewportSize());
  const [orderedItems, setOrderedItems] = useState<GridItem[]>(reorderItems(gridItems, viewportSize));

  useEffect(() => {
    const handleResize = () => {
      const newViewportSize = getViewportSize();
      setViewportSize(newViewportSize);
      setOrderedItems(reorderItems(gridItems, newViewportSize));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='about'>
      <BentoGrid>
        {orderedItems.map
          (({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ))}
      </BentoGrid>

    </section>
  )
}

export default Grid