import React from "react";

function InfiniteRotation() {
  return (
    <div className="infinite-rotation-wrapper drop-in-2">
      <svg
        className="infinite-rotation-heart"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <g clipPath="url(#clip0_32_3564)">
          <path
            d="M13.1638 23.3917L11.5877 21.9569C5.98984 16.8808 2.29419 13.533 2.29419 9.42431C2.29419 6.07648 4.92462 3.44604 8.27245 3.44604C10.1638 3.44604 11.979 4.32648 13.1638 5.71778C14.3485 4.32648 16.1638 3.44604 18.0551 3.44604C21.4029 3.44604 24.0333 6.07648 24.0333 9.42431C24.0333 13.533 20.3377 16.8808 14.7398 21.9678L13.1638 23.3917Z"
            fill="#457D61"
          />
        </g>
        <defs>
          <clipPath id="clip0_32_3564">
            <rect
              width="26.087"
              height="26.087"
              fill="white"
              transform="translate(0.120117 0.185059)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="infinite-rotation"></div>
    </div>
  );
}

export default InfiniteRotation;
