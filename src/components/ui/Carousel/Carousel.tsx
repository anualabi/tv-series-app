'use client'

import { motion, useAnimation } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

import { IconArrowLeft, IconArrowRight } from '@/components/icons';

export type CarouselProps = {
    items: React.ReactNode[];
    itemWidth?: number;
};

const ArrowButton: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}> = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'left' ? IconArrowLeft : IconArrowRight;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`mx-2 text-white focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      data-testid={direction === 'left' ? "left-arrow" : "right-arrow"}
    >
      <Icon />
    </motion.button>
  );
};

const Carousel: React.FC<CarouselProps> = ({ items, itemWidth = 250 }) => {
    const boxRef = useRef(null);
    const controls = useAnimation();
    const [position, setPosition] = useState<number>(0);
    const [shouldDrag, setShouldDrag] = useState<boolean>(false);

    useEffect(() => {
        const updateShouldDrag = () => {
            setShouldDrag(window.innerWidth <= 768);
        };
        window.addEventListener('resize', updateShouldDrag);

        updateShouldDrag();

        return () => window.removeEventListener('resize', updateShouldDrag);
    }, []);

    const handleNext = () => {
        if (position > -(items.length - 1) * itemWidth) {
            setPosition(position - itemWidth);
            controls.start({ x: position - itemWidth });
        }
    };

    const handlePrevious = () => {
        if (position < 0) {
        setPosition(position + itemWidth);
        controls.start({ x: position + itemWidth });
        }
    };

    return (
        <motion.div className="h-full flex w-full overflow-x-hidden relative" ref={boxRef}>
            <motion.div
                className="inline-flex gap-4"
                drag={shouldDrag ? 'x' : false}
                dragConstraints={boxRef}
                animate={controls}
                transition={{ ease: "easeOut", duration: 1 }}
            >
                {items}
            </motion.div>

            {/* Left and Righ arrow icons */}
            <div className="absolute bottom-0 right-3 hidden md:block">
                <ArrowButton direction="left" onClick={handlePrevious} disabled={position >= 0} />
                <ArrowButton direction="right" onClick={handleNext} disabled={position <= -(items.length - 1) * itemWidth / 2} />  
            </div>
        </motion.div>
    );
};

export default Carousel;
