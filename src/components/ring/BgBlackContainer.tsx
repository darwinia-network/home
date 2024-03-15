// BgBlackContainer.tsx
import React, { ReactNode, forwardRef } from 'react';
import PropTypes from 'prop-types';

type BgBlackContainerProps = {
  children: ReactNode;
};

const BgBlackContainer = forwardRef<HTMLDivElement, BgBlackContainerProps>(({ children }, ref) => {
  return (
    <div className='lg:w-[695px] bg-black rounded-[30px] p-[20px] lg:p-[40px] flex flex-col gap-[30px] mx-[20px] lg:mx-0 h-fit' ref={ref}>
      {children}
    </div>
  );
});

BgBlackContainer.displayName = 'BgBlackContainer';

BgBlackContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default BgBlackContainer;