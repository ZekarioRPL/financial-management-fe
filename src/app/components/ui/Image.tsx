import Image, { ImageProps } from 'next/image';
import React from 'react';

type CustomImageProps = Omit<ImageProps, 'alt'> & {
  alt: string; // pastikan alt wajib
};

const CustomImage: React.FC<CustomImageProps> = (props) => {
  return <Image {...props} alt={props.alt} />;
};

export default CustomImage;
