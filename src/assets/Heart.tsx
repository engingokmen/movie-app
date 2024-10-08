import React from 'react'

export const Heart = ({ className = '' }: { className?: string }) => {
    return (
        <div className="icon-heart-container">
            <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`icon-heart ${className}`}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.17157 1.9039C2.73367 0.382906 5.26633 0.382906 6.82842 1.9039L7.99999 3.04464L9.17157 1.9039C10.7337 0.382906 13.2663 0.382906 14.8284 1.9039C16.3905 3.42488 16.3905 5.8909 14.8284 7.41188L7.99999 14.0606L1.17157 7.41188C-0.390524 5.8909 -0.390524 3.42488 1.17157 1.9039Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    )
}
