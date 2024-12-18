import { Copy } from 'lucide-react';
import { useState } from 'react';
import type { QuranVerse } from '../types/quran';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { XIcon } from './icons/XIcon';

interface ShareButtonsProps {
  verse: QuranVerse;
}

export function ShareButtons({ verse }: ShareButtonsProps) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const cleanTranslation = (text: string) => {
    return text.replace(/<sup.*?<\/sup>/g, '');
  };

  const handleCopy = async () => {
    try {
      const cleanText = cleanTranslation(verse.text_translation);
      await navigator.clipboard.writeText(`${verse.text_uthmani}\n\n${cleanText}\n\nQuran ${verse.verse_key}`);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleWhatsAppShare = () => {
    const cleanText = cleanTranslation(verse.text_translation);
    const text = encodeURIComponent(`${cleanText}\n\nQuran ${verse.verse_key}`);
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleTweet = () => {
    const cleanText = cleanTranslation(verse.text_translation);
    const text = encodeURIComponent(`${cleanText}\n\nQuran ${verse.verse_key}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-4 items-center">
      {showCopyMessage && (
        <span className="text-sm text-green-600 dark:text-green-400">Copied!</span>
      )}
      <button
        onClick={handleCopy}
        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        aria-label="Copy verse"
      >
        <Copy className="w-5 h-5" />
      </button>
      <button
        onClick={handleWhatsAppShare}
        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5" />
      </button>
      <button
        onClick={handleTweet}
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Share on X"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  );
}