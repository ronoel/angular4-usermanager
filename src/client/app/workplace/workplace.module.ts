// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutingModule } from './workplace-routing.module';

import { SharedModule } from '../shared/shared.module';

import { CadastroModule } from '../cadastro/cadastro.module';
import { BuscaModule } from '../busca/busca.module';

@NgModule({
    imports: [
        WorkplaceRoutingModule, CadastroModule, BuscaModule, SharedModule.forRoot()
    ],
    declarations: [
        WorkplaceComponent,
    ],
    exports: [
        WorkplaceComponent,
    ]
})
export class WorkplaceModule {
//
}
