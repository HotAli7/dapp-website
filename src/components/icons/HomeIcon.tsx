import React from 'react';

export const HomeIcon = ({
  color = 'currentColor',
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.8 0.45L0.800003 6.85C0.300003 7.25 0 7.85 0 8.45V17.45C0 18.55 0.9 19.45 2 19.45H6V13.45C6 12.35 6.9 11.45 8 11.45H12C13.1 11.45 14 12.35 14 13.45V19.45H18C19.1 19.45 20 18.55 20 17.45V8.45C20 7.85 19.7 7.25 19.2 6.85L11.2 0.45C10.6 -0.15 9.5 -0.15 8.8 0.45Z" fill="#FED4FF"/>
    </svg>

  );
};
