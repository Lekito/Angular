export interface Contato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  aniversario?: string; // interrogação aqui serve para deixar esse tipo opcional.
  redes?: string;
  observações?: string;
}
