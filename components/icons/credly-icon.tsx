import React from 'react'

export function CredlyIcon({ className = 'w-5 h-5', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.2.72 4.23 1.94 5.88L3 22l4.35-.87C8.86 21.68 10.38 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.32-3.84-.89l-.27-.14-2.82.56.57-2.76-.17-.28C4.85 15.34 4.5 13.72 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm3.5-9.75l-4.5 4.5-2-2a.75.75 0 0 0-1.06 1.06l2.53 2.53a.75.75 0 0 0 1.06 0l5.03-5.03a.75.75 0 1 0-1.06-1.06z" />
    </svg>
  )
}

export function CredlyBadgeLogo({ className = 'w-6 h-6', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#FF6B00" />
      <path
        d="M16 6L18.5 11.5L24.5 12.2L20 16.3L21.2 22.2L16 19.2L10.8 22.2L12 16.3L7.5 12.2L13.5 11.5L16 6Z"
        fill="white"
      />
    </svg>
  )
}
