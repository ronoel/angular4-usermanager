// Angular Imports
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

// This Module's Components
import { BuscaComponent } from './busca.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        BuscaComponent,
    ],
    exports: [
        BuscaComponent,
    ]
})
export class BuscaModule {

}
