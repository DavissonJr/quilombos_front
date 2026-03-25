import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  contatos = [
    {
      titulo: 'Localização',
      valor: 'IFPE, Vitória de Santo Antão - PE',
      icone: 'bi-geo-alt',
      link: 'https://maps.google.com',
    },
    {
      titulo: 'Telefone',
      valor: '(81) 99999-9999',
      icone: 'bi-telephone',
      link: 'tel:81999999999',
    },
    {
      titulo: 'Email',
      valor: 'contato@quilombos.com',
      icone: 'bi-envelope',
      link: 'mailto:contato@quilombos.com',
    },
  ];
}
