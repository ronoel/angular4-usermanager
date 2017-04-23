import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkplaceComponent } from './workplace.component';

import { BuscaComponent } from '../busca/busca.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: WorkplaceComponent, children: [
          { path: '', redirectTo: 'busca', pathMatch: 'full' },
          { path: 'busca', component: BuscaComponent },
          { path: 'cadastro', component: CadastroComponent }
        ]
      }

    ])
  ],
  exports: [RouterModule]
})
export class WorkplaceRoutingModule { }
