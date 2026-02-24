import React from "react";

interface ReturnIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function ReturnIcon({
  size = 24,
  color = "currentColor",
  className = "",
}: ReturnIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 67.54 62.03"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M18.94,25.64V4.69a3.19,3.19,0,0,1,3.2-3.19H62.85A3.19,3.19,0,0,1,66,4.69V45.4a3.19,3.19,0,0,1-3.19,3.2H35.5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="50.26 19.71 42.49 13.66 34.72 19.71 34.72 1.5 50.26 1.5 50.26 19.71"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="18.94"
          cy="43.09"
          r="17.44"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M11.62,51.36h8.43a6.22,6.22,0,0,0,0-12.44H13.94"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <polyline
          points="18.39 43.19 13.94 38.92 18.39 34.65"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
