export interface Contato {
  id: number;
  nome: string;
  avatar: string | ArrayBuffer,
  telefone: string;
  email: string;
  aniversario?: string; // interrogação aqui serve para deixar esse tipo opcional.
  redes?: string;
  observações?: string;
}
