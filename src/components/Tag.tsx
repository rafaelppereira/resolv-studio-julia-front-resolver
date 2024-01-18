import { Plus } from 'phosphor-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  const [tagText, setTagText] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  function handleIncrementTag() {
    const findTagExists = tags.find((tag) => tag === tagText);

    if (findTagExists) {
      toast.error(
        `Essa ${title
          .toLowerCase()
          .substring(0, title.length - 1)} já foi criada`
      );
      return;
    }

    setTags([...tags, tagText]);
    setTagText('');
  }

  function handleIncrementTagWithKeyDown(event: any) {
    if (event.key === 'Enter') {
      handleIncrementTag();
    }
  }

  return (
    <div>
      <h1 className="text-zinc-400 text-sm">
        {title} (Crie novas {title.toLowerCase()})
      </h1>
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          value={tagText}
          onKeyDown={handleIncrementTagWithKeyDown}
          onChange={(e) => setTagText(e.target.value)}
          placeholder={`Digite sua ${title.toLowerCase()} para criar`}
          className="w-full h-11 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
        />

        <button
          type="button"
          disabled={tagText === ''}
          onClick={handleIncrementTag}
          className="w-11 h-11 flex items-center shrink-0 justify-center rounded-md bg-brand-500 text-white"
        >
          <Plus size={23} weight="bold" />
        </button>
      </div>

      <div className="flex items-center gap-3 mt-3 flex-wrap">
        {tags.map((item, index) => {
          return (
            <span
              key={index}
              className="bg-zinc-700 px-3 py-2 text-sm rounded-md text-white"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
