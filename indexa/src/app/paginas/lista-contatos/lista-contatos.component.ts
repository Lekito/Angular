import { Component } from '@angular/core';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from '../../agenda.json';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css',
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  private removerAcentos(s: string): string {
    let map: { [key: string]: string } = {
      â: 'a',
      Â: 'A',
      à: 'a',
      À: 'A',
      á: 'a',
      Á: 'A',
      ã: 'a',
      Ã: 'A',
      ê: 'e',
      Ê: 'E',
      è: 'e',
      È: 'E',
      é: 'e',
      É: 'E',
      î: 'i',
      Î: 'I',
      ì: 'i',
      Ì: 'I',
      í: 'i',
      Í: 'I',
      õ: 'o',
      Õ: 'O',
      ô: 'o',
      Ô: 'O',
      ò: 'o',
      Ò: 'O',
      ó: 'o',
      Ó: 'O',
      ü: 'u',
      Ü: 'U',
      û: 'u',
      Û: 'U',
      ú: 'u',
      Ú: 'U',
      ù: 'u',
      Ù: 'U',
      ç: 'c',
      Ç: 'C',
    };

    return s
      .replace(/[\W\[\] ]/g, function (a: string): string {
        return map[a] || a;
      })
      .toLowerCase();
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter((contato) => {
      return this.removerAcentos(contato.nome).includes(
        this.filtroPorTexto.toLowerCase()
      );
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
