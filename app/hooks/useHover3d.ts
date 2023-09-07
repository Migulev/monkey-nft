import { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';

type UseHover3dProps = {
  rotationFactorX?: number;
  rotationFactorY?: number;
  translateZ?: number;
  perspective?: number;
};

/**
 * Hook for creating a 3D-rotation effect when hovering over an element.
 * @param {React.RefObject<HTMLElement>} ref - Reference to the element to which the effect is applied.
 * @param {UseHover3dProps} options - Options for the effect.
 * @param {number} options.rotationFactorX - Rotation factor (how much) on the X axis when hovering (default: 0).
 * @param {number} options.rotationFactorY - Rotation factor (how much) on the Y axis when hovering (default: 0).
 * @param {number} options.translateZ - Translate Z axis (increase for more tilt), default 0
 * @param {number} options.perspective - Perspective on the transform, default 1000
 */

export default function useHover3d(
  ref: React.RefObject<HTMLElement>,
  {
    rotationFactorX = 0,
    rotationFactorY = 0,
    translateZ = 0,
    perspective = 1000,
  }: UseHover3dProps
) {
  const [rotationRatio, setRotationRatio] = useState({
    x: 0,
    y: 0,
  }); // ratio of mouse position to element size
  const [isHovering, setIsHovering] = useState(false);

  const calculateRotationRatio = _.throttle((e: MouseEvent) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current!;
    const { clientX, clientY } = e;

    const newX = (clientY - height / 2) / height;
    const newY = (clientX - width / 2) / width;

    setRotationRatio({ x: newX, y: newY });
  }, 50);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const { current } = ref;

    current!.addEventListener('mousemove', calculateRotationRatio);
    current!.addEventListener('mouseenter', handleMouseEnter);
    current!.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      current!.removeEventListener('mousemove', calculateRotationRatio);
      current!.removeEventListener('mouseenter', handleMouseEnter);
      current!.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);

  const { x, y } = rotationRatio;

  const transform = useMemo(() => {
    const xTransform = isHovering ? x * rotationFactorX : 0;
    const yTransform = isHovering ? y * rotationFactorY : 0;

    return `perspective(${perspective}px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${translateZ}px)`;
  }, [isHovering, x, y, rotationFactorX, rotationFactorY, translateZ]);

  return { transform };
}
