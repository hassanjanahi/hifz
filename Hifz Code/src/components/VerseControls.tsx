import { useState, useEffect } from 'react';
import type { QuranVerse, Reciter } from '../types/quran';
import { AudioPlayer } from './AudioPlayer';

interface VerseControlsProps {
  verse: QuranVerse;
  selectedReciter: Reciter;
}

export function VerseControls({ verse, selectedReciter }: VerseControlsProps) {
  const [audioUrl, setAudioUrl] = useState<string>('');

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch(
          `https://api.quran.com/api/v4/verses/by_key/${verse.verse_key}?audio=${selectedReciter.id}`
        );
        if (!response.ok) throw new Error('Failed to fetch audio');
        const data = await response.json();
        setAudioUrl(data.verse.audio.url);
      } catch (error) {
        console.error('Failed to fetch audio:', error);
      }
    };
    fetchAudio();
  }, [verse.verse_key, selectedReciter.id]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600 dark:text-gray-400 text-base">
        Verse: {verse.verse_key}
      </span>
      {audioUrl && <AudioPlayer url={audioUrl} />}
    </div>
  );
}