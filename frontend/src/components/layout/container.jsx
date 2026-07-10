import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {children}
    </div>
  );
};

export default Container;