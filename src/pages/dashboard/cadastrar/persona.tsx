import Head from 'next/head';
import { useState } from 'react';

import { Dropzone } from '@/components/Dropzone';
import { LayoutDefault } from '@/layouts/Default';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { PersonaSelect } from '@/components/persona/PersonaSelector';

export default function CreatePersona() {
  const [step, setStep] = useState(1);

  function handleDecrementStep() {
    if (step === 1) {
      return;
    }

    setStep(step - 1);
  }

  function handleIncrementStep() {
    if (step === 4) {
      return;
    }

    setStep(step + 1);
  }

  function handleSetStep(stepData: number) {
    setStep(stepData);
  }

  return (
    <>
      <Head>
        <title>Vamos dar vida a sua persona | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex h-full">
          <div className="relative flex-1 p-5 flex items-center justify-center border-r-2 border-zinc-700">
            <PersonaSelect step={step} onSetStep={handleSetStep} />

            <div className="absolute  top-7 right-7 flex items-center gap-2">
              <button
                type="button"
                disabled={step === 1}
                onClick={handleDecrementStep}
                className="relative group bg-zinc-700 w-9 h-9 flex items-center justify-center text-zinc-400 rounded-md"
              >
                <CaretLeft size={20} />

                <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute top-1/2 -translate-y-1/2 right-11 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                  Voltar uma etapa
                  <div className="absolute top-1/2 -right-[2px] -translate-y-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
                </div>
              </button>
              <button
                type="button"
                disabled={step === 4}
                onClick={handleIncrementStep}
                className="relative group bg-zinc-700 w-9 h-9 flex items-center justify-center text-zinc-400 rounded-md"
              >
                <CaretRight size={20} />

                <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute top-1/2 -translate-y-1/2 left-11 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                  Avançar uma etapa
                  <div className="absolute top-1/2 -left-[2px] -translate-y-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
                </div>
              </button>
            </div>
          </div>

          {step === 1 ? (
            <div className="flex-[1.5] p-5 overflow-y-auto">
              <h1 className="text-3xl text-zinc-200 font-semibold">
                Sobre a persona
              </h1>

              <p className="max-w-md mt-1 text-zinc-400 text-md">
                De vida à sua persona que se encaixe perfeitamente no seu fluxo
                e faça você criar incrível.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <div>
                  <label className="text-zinc-400 text-sm">Empresa</label>
                  <select className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300">
                    <option value="">Selecione uma empresa</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 text-sm">
                    Qual será meu nome?
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o nome da sua persona"
                    className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 text-sm">
                    Quantos anos eu tenho?
                  </label>
                  <input
                    type="number"
                    placeholder="Digite quantos anos sua persona tem"
                    className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
                  />
                </div>

                <h1 className="mt-3 text-xl text-zinc-300 font-medium">
                  Qual meu gênero?
                </h1>
                <div className="grid grid-cols-3 gap-3">
                  <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                    <input type="radio" name="gender" className="w-5 h-5" />{' '}
                    Masculino
                  </label>

                  <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                    <input type="radio" name="gender" className="w-5 h-5" />{' '}
                    Feminino
                  </label>

                  <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                    <input type="radio" name="gender" className="w-5 h-5" />{' '}
                    Outro
                  </label>
                </div>

                <Dropzone />

                <div>
                  <label className="text-zinc-400 text-sm">
                    Conte um pouco sobre mim
                  </label>
                  <textarea
                    placeholder="Digite quantos anos sua persona tem"
                    className="w-full min-h-32 resize-y mt-2 rounded-md p-3 bg-zinc-600 text-sm text-zinc-300"
                  />
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            <div className="flex-[1.5] p-5 overflow-y-auto">
              <h1 className="text-3xl text-zinc-200 font-semibold">
                Persona da persona
              </h1>

              <p className="max-w-md mt-1 text-zinc-400 text-md">
                De vida à sua persona que ela/ele se encaixe perfeitamente no
                seu fluxo .
              </p>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <h1>Introvertido</h1>
                  <h1>Extrovertido</h1>
                </div>

                <input
                  min={1}
                  max={5}
                  step={1}
                  value={3}
                  type="range"
                  className="w-full mt-2 h-5 appearance-none rounded-md bg-zinc-700"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <h1>Analítico</h1>
                  <h1>Criativo</h1>
                </div>

                <input
                  min={1}
                  max={5}
                  step={1}
                  value={3}
                  type="range"
                  className="w-full mt-2 h-5 appearance-none rounded-md bg-zinc-700"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <h1>Dedicado</h1>
                  <h1>Versátil</h1>
                </div>

                <input
                  min={1}
                  max={5}
                  step={1}
                  value={3}
                  type="range"
                  className="w-full mt-2 h-5 appearance-none rounded-md bg-zinc-700"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <h1>Passivo</h1>
                  <h1>Ativo</h1>
                </div>

                <input
                  min={1}
                  max={5}
                  step={1}
                  value={3}
                  type="range"
                  className="w-full mt-2 h-5 appearance-none rounded-md bg-zinc-700"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm">
                  Personalidades adicionais
                </label>
                <textarea
                  placeholder="Você deseja inserir mais personalidades?"
                  className="w-full min-h-32 resize-y mt-2 rounded-md p-3 bg-zinc-600 text-sm text-zinc-300"
                />
              </div>

              <div className="my-5 block w-full h-1 bg-zinc-700 rounded-full" />

              <h1 className="mt-3 text-xl text-zinc-300 font-medium">
                Quais serão minhas características de fala?
              </h1>

              <div className="mt-4">
                <label className="text-zinc-400 text-sm">Tom de voz</label>
                <select className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300">
                  <option value="">Selecione um tom de voz</option>
                </select>
              </div>

              <h1 className="mt-5 text-xl text-zinc-300 font-medium">
                Qual meu tipo de fala?
              </h1>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                  <input type="radio" name="speech" className="w-5 h-5" />{' '}
                  Formal
                </label>

                <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                  <input type="radio" name="speech" className="w-5 h-5" />{' '}
                  Informal
                </label>
              </div>

              <h1 className="mt-5 text-xl text-zinc-300 font-medium">
                Eu utilizarei emoji?
              </h1>
              <div className="grid grid-cols-3 gap-3 mt-2">
                <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                  <input type="radio" name="emoji" className="w-5 h-5" /> Nunca
                </label>

                <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                  <input type="radio" name="emoji" className="w-5 h-5" />{' '}
                  Raramente
                </label>

                <label className="bg-brand-500 px-3 py-2 rounded-md flex items-center font-semibold text-white gap-3">
                  <input type="radio" name="emoji" className="w-5 h-5" />{' '}
                  frequentemente
                </label>
              </div>
            </div>
          ) : step === 3 ? (
            <div className="flex-[1.5] p-5 overflow-y-auto">STEP</div>
          ) : (
            step === 4 && (
              <div className="flex-[1.5] p-5 overflow-y-auto">STEP</div>
            )
          )}
        </div>
      </LayoutDefault>
    </>
  );
}
