import Image from 'next/image';

interface PersonaSelectProps {
  step: number;
  onSetStep: (stepData: number) => void;
}

export function PersonaSelect({ step, onSetStep }: PersonaSelectProps) {
  return (
    <div className="w-[60vh] shrink-0 aspect-square bg-zinc-800 rounded-full overflow-hidden grid grid-cols-2 gap-4 relative border-4 border-zinc-500">
      <button
        type="button"
        onClick={() => onSetStep(1)}
        className={`${
          step === 1 ? 'bg-brand-500' : 'bg-zinc-700'
        } w-full aspect-square text-center  hover:bg-brand-500 hover:scale-105 flex items-center justify-center hover:text-white hover:brightness-100`}
      >
        <div className="relative left-4 top-4 text-zinc-300 text-5xl font-semibold">
          01
        </div>
      </button>

      <button
        type="button"
        onClick={() => onSetStep(2)}
        className={`${
          step === 2 ? 'bg-brand-500' : 'bg-zinc-700'
        } w-full aspect-square text-center hover:bg-brand-500 hover:scale-105 flex items-center justify-center hover:text-white hover:brightness-100`}
      >
        <div className="relative right-4 top-4 text-zinc-300 text-5xl font-semibold">
          02
        </div>
      </button>

      <button
        type="button"
        onClick={() => onSetStep(3)}
        className={`${
          step === 3 ? 'bg-brand-500' : 'bg-zinc-700'
        } w-full aspect-square text-center hover:bg-brand-500 hover:scale-105 flex items-center justify-center hover:text-white hover:brightness-100`}
      >
        <div className="relative left-4 bottom-4 text-zinc-300 text-5xl font-semibold">
          03
        </div>
      </button>

      <button
        type="button"
        onClick={() => onSetStep(4)}
        className={`${
          step === 4 ? 'bg-brand-500' : 'bg-zinc-700'
        } w-full aspect-square text-center hover:bg-brand-500  hover:scale-105 flex items-center justify-center hover:text-white hover:brightness-100`}
      >
        <div className="relative right-4 bottom-4 text-zinc-300 text-5xl font-semibold">
          04
        </div>
      </button>

      <div className="text-white border-4 border-zinc-600 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[25%] bg-zinc-800 aspect-square rounded-full flex items-center justify-center">
        <Image
          width={100}
          height={100}
          alt="Studio Jul.IA"
          className="w-full h-full opacity-60"
          src="/julia-images/julia-home.png"
        />
      </div>
    </div>
  );
}
