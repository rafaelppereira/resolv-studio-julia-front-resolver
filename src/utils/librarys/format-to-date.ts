import { format } from 'date-fns/format';
import { ptBR } from 'date-fns/locale/pt-BR';

export function formatToDate(date: string) {
  return format(new Date(date), "dd 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
    locale: ptBR,
  });
}
