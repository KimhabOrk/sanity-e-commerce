import React from "react";

interface TruckIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function TruckIcon({
  size = 36,
  color = "currentColor",
  className = "",
}: TruckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 87.71 45.48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M20.29,14.82V5.29A3.79,3.79,0,0,1,24.08,1.5H62.25A3.79,3.79,0,0,1,66,5.29v30.5H40.44"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M30.07,35.79h-6A3.79,3.79,0,0,1,20.29,32V28.06"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M70.94,35.79H66V9.42h8.07S86.21,12,86.21,24.56V35.79h-4.9"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M72.73,9.42V18A5.25,5.25,0,0,0,78,23.22h8.18"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="76.13"
          cy="35.79"
          r="5.19"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="35.26"
          cy="35.79"
          r="5.19"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="17.06"
          y1="28.06"
          x2="25.36"
          y2="28.06"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="11.53"
          y1="21.64"
          x2="26.86"
          y2="21.64"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="31.81"
          y1="25.91"
          x2="41.26"
          y2="25.91"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8.65"
          y1="27.26"
          x2="1.5"
          y2="27.26"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="26.86"
          y1="7.58"
          x2="43.16"
          y2="7.58"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="76.13" cy="35.79" r="1.4" fill={color} />
        <circle cx="35.26" cy="35.79" r="1.4" fill={color} />
      </g>
    </svg>
  );
}
