import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component'
import {RouterModule} from '@angular/router'
@Component({
  //descrição do component
  selector: 'app-root',
  //descreve se o component precisa de um NgModule
  standalone: true,
 //descreve as dependências d ocomponent 
  imports: [
 
    RouterModule
  ],
  //para descrever a marcação HTML e o layout do componente.
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
 // para listar as URLs dos arquivos CSS que o componente usa em uma matriz.
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
