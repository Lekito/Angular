import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', [Validators.required, Validators.min(11)]),
      email: new FormControl('alex@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato() {
    console.log(this.contatoForm.value);
    console.log(this.contatoForm.get('email')?.errors);
  }

  cancelar() {
    console.log('Submissão cancelada');
  }
}
