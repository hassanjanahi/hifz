import type { QuranVerse } from '../types/quran';

interface VerseTextProps {
  verse: QuranVerse;
}

export function VerseText({ verse }: VerseTextProps) {
  const cleanTranslation = (text: string) => {
    return text.replace(/<sup.*?<\/sup>/g, '');
  };

  return (
    <>
      <div className="flex justify-between items-start mb-6">
        <p className="text-right font-arabic text-[1.35rem] text-gray-900 dark:text-gray-100 leading-[2] flex-grow">
          {verse.text_uthmani}
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
        {cleanTranslation(verse.text_translation)}
      </p>
    </>
  );
}