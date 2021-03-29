import React from 'react';

export const CreditCardIcon = ({
  color = 'currentColor',
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16H4C1.8 16 0 14.2 0 12V5.5H20V12C20 14.2 18.3 16 16 16ZM4 0C1.96924 0 0.279315 1.5337 0.0313211 3.5H19.9687C19.7207 1.5337 18.0308 0 16 0H4ZM12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5H16C16.2761 12.5 16.5 12.2761 16.5 12C16.5 11.7239 16.2761 11.5 16 11.5H12Z" fill="#FED4FF"/>
    </svg>
  );
};
