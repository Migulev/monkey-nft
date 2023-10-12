type Props = {
  numberOfLines?: number;
};

const LayoutBackground = ({ numberOfLines = 4 }: Props) => {
  const shapes = [
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
  ];

  return (
    <div className="lines">
      {Array(numberOfLines)
        .fill(null)
        .map((_, lineIndex) => (
          <div className="line" key={lineIndex}>
            <div className="shapes">
              {shapes.map((shape, shapeIndex) => (
                <div key={shapeIndex} className={shape}></div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default LayoutBackground;
