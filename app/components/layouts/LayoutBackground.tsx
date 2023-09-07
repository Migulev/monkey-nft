import React from 'react';

type Props = {
  numberOfLines?: number;
};

const LayoutBackground = ({ numberOfLines = 4 }: Props) => {
  const shapes = ['circle', 'x-shape'];

  return (
    <div className="lines">
      {Array(numberOfLines).fill(
        <div className="line">
          <div className="shapes">
            {shapes.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutBackground;
