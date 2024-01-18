import React from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadSimple } from 'phosphor-react';

export function Dropzone(props: any) {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();

  const files: any = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={`${
          isDragActive ? 'border-brand-500' : 'border-zinc-600'
        } cursor-pointer bg-zinc-700 mt-3 text-zinc-300 p-3 flex flex-col items-center rounded-md border-2 border-dashed `}
      >
        <input {...getInputProps()} />
        <UploadSimple size={25} />

        {isDragActive ? (
          <p className="mt-2 text-center">
            Solte o arquivo para salvar <br /> e subir a imagem da persona
          </p>
        ) : (
          <p className="mt-2 text-center">
            Arraste e solte algum arquivo <br /> aqui ou clique para selecionar
            o arquivo
          </p>
        )}
      </div>
      <aside>
        <ul className="mt-2 text-zinc-400 text-sm">{files}</ul>
      </aside>
    </section>
  );
}
