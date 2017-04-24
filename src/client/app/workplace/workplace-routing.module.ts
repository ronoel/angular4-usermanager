import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkplaceComponent } from './workplace.component';

import { BuscaComponent } from '../busca/busca.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

import { AdminRole } from '../roles/admin-role';
import { UserRole } from '../roles/user-role';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: WorkplaceComponent, children: [
          { path: '', redirectTo: 'busca', pathMatch: 'full' },
          { path: 'busca', component: BuscaComponent, canActivate: [UserRole] },
          { path: 'cadastro', component: CadastroComponent, canActivate: [AdminRole] }
        ]
      }

    ])
  ],
  exports: [RouterModule]
})
export class WorkplaceRoutingModule { }
