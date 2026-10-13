import React from 'react';

export const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/923012737599"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
    className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 hover:bg-[#20BD5A] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
    style={{
      right: 'calc(1rem + env(safe-area-inset-right))',
      bottom: 'calc(1rem + env(safe-area-inset-bottom))'
    }}
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.52 3.48A11.82 11.82 0 0 0 2.06 17.72L.5 23.5l5.92-1.55a11.82 11.82 0 0 0 14.1-18.47ZM12 21.15c-1.8 0-3.56-.48-5.1-1.39l-.37-.22-3.51.92.94-3.42-.24-.38a9.13 9.13 0 1 1 8.28 4.49Z"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06 6.4c-.28-.62-.58-.63-.85-.64-.22-.01-.48-.01-.74-.01-.26 0-.68.1-1.03.48-.35.38-1.35 1.32-1.35 3.22s1.38 3.74 1.57 4c.19.26 2.67 4.28 6.59 5.82 3.26 1.28 3.93 1.03 4.64.97.71-.07 2.28-.93 2.6-1.83.32-.9.32-1.67.23-1.83-.1-.16-.36-.26-.74-.45-.39-.19-2.28-1.12-2.64-1.25-.35-.13-.61-.19-.87.19-.26.39-1 1.25-1.22 1.51-.23.26-.45.29-.84.1-.39-.19-1.64-.61-3.12-1.9-1.16-1.03-1.93-2.3-2.16-2.68-.22-.39-.02-.61.17-.8.17-.18.39-.45.58-.67.19-.23.26-.39.39-.65.13-.26.06-.48-.03-.67-.09-.19-.86-2.09-1.18-2.86Z"
        fill="currentColor"
      />
    </svg>
  </a>
);
