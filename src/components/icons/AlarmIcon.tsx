import React from 'react';

export const AlarmIcon = ({
  color = 'currentColor',
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0.5C8.5 0.223858 8.27614 0 8 0C7.72386 0 7.5 0.223858 7.5 0.5V3.5C7.5 3.50695 7.50014 3.51387 7.50042 3.52076C4.43181 3.77676 2 6.36818 2 9.5V13.5C0.9 13.5 0 14.4 0 15.5C0 16.6 0.9 17.5 2 17.5H4.5C4.5 19.4761 6.02386 21 8 21C9.97614 21 11.5 19.4761 11.5 17.5H14C15.1 17.5 16 16.6 16 15.5C16 14.4 15.1 13.5 14 13.5V9.5C14 6.36818 11.5682 3.77676 8.49958 3.52076C8.49986 3.51387 8.5 3.50695 8.5 3.5V0.5ZM8 20C6.57614 20 5.5 18.9239 5.5 17.5H10.5C10.5 18.9239 9.42386 20 8 20Z" fill="#FED4FF"/>
    </svg>
  );
};
