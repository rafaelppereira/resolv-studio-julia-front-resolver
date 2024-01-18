import { ChartDynamic, options, series } from "@/utils/librarys/config-chart";

interface ChartProps {
  title: string;
  usage: number;
  limit: number;
}

export function Chart({ title, usage, limit }: ChartProps) {
  const usageFormat = String(usage).padStart(2, '0');
  const limitFormat = String(limit).padStart(2, '0');
 
  return (
    <div className="bg-zinc-700 rounded-md p-3 flex flex-col gap-4">
      <h1 className="text-zinc-300 text-sm px-4">{title} - <span className="text-brand-500 font-semibold">{usageFormat} de {limitFormat}</span></h1>
      <ChartDynamic options={options} series={series} type="bar" height={300} />
    </div>
  );
}
