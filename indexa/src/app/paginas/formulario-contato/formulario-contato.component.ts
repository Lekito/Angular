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
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

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

  constructor(private ContatoService: ContatoService, private router: Router) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', [Validators.required, Validators.min(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.ContatoService.salvarContato(novoContato).subscribe(() => {

      console.log('Salvar contato: ', novoContato);

      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    });
  }

  cancelar() {
    this.contatoForm.reset();
    console.log('Submissão cancelada');
  }
}
