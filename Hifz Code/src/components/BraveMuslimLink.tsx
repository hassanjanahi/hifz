import { ShoppingBagIcon } from './icons/ShoppingBagIcon';

export function BraveMuslimLink() {
  return (
    <a
      href="https://bravemuslim.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      aria-label="Visit Brave Muslim"
    >
      <ShoppingBagIcon className="w-10 h-10" />
    </a>
  );
}