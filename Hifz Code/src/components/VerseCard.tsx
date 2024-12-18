import { Copy } from 'lucide-react';
import { useState } from 'react';
import type { QuranVerse, Reciter } from '../types/quran';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { XIcon } from './icons/XIcon';
import { AudioPlayer } from './AudioPlayer';
import { ReciterSelector } from './ReciterSelector';
import { reciters } from '../services/reciters';
import { VerseControls } from './VerseControls';
import { VerseText } from './VerseText';
import { ShareButtons } from './ShareButtons';

interface VerseCardProps {
  verse: QuranVerse;
}

export function VerseCard({ verse }: VerseCardProps) {
  const defaultReciter = reciters.find(r => r.id === 2) || reciters[0];
  const [selectedReciter, setSelectedReciter] = useState<Reciter>(defaultReciter);

  const handleReciterChange = (reciter: Reciter) => {
    setSelectedReciter(reciter);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg max-w-2xl w-full mx-auto">
      <VerseText verse={verse} />
      
      <div className="flex flex-col gap-4">
        <div className="border-t border-gray-200 dark:border-gray-700/50 pt-4">
          <ReciterSelector selectedReciter={selectedReciter} onSelect={handleReciterChange} />
        </div>

        <div className="flex items-center justify-between">
          <VerseControls verse={verse} selectedReciter={selectedReciter} />
          <ShareButtons verse={verse} />
        </div>
      </div>
    </div>
  );
}