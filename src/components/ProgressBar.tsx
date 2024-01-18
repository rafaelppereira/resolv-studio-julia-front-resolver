interface ProgressBarProps {
  title: string;
  current: number;
  max: number;
}

export function ProgressBar({ title, current, max }: ProgressBarProps) {
  const percentage = `${Math.round((current / max) * 100)}`;

  return (
    <div className="bg-zinc-700 px-4 py-2 rounded-md border-2 border-zinc-600">
      <h1 className="text-sm text-zinc-400">{title}</h1>

      <div className="bg-zinc-500 mt-2 rounded-sm w-64 h-7 overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className={`${
            percentage === '0' ? 'bg-transparent' : 'bg-zinc-400'
          } flex items-center transition-all px-2 h-7 text-sm font-semibold text-zinc-800`}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
