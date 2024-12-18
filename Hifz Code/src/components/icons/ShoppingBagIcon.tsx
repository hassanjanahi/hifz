import { SVGProps } from 'react';

export function ShoppingBagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Simple rectangular bag shape */}
      <rect x="3" y="7" width="18" height="14" rx="2" />
      {/* Clean handles - moved down to be fully visible */}
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
    </svg>
  );
}