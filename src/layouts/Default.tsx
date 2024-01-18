import { ReactNode } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

interface LayoutDefaultProps {
  children: ReactNode;
  disabledHeader?: boolean;
}

export function LayoutDefault({
  children,
  disabledHeader = false,
}: LayoutDefaultProps) {
  return (
    <section className="w-full min-h-screen flex">
      <Sidebar />

      <div className="flex-col flex-1 p-3 p- overflow-y-auto h-screen">
        <Header disabled={disabledHeader} />

        <div
          className={`${
            disabledHeader
              ? 'mt-0 h-[calc(100vh-1.5rem)]'
              : 'mt-4 h-[calc(100vh-6.5rem)]'
          } z-10 flex-1 bg-zinc-800/90 backdrop-blur-sm  rounded-md p-4 flex flex-col  overflow-y-auto`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
