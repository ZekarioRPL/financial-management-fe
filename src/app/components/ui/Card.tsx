// import { cn } from '../../lib/utils';
import React from 'react';

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'rounded-2xl border bg-white text-black shadow-sm', className} {...props} />
  );
};

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={'p-6', className} {...props} />;
};