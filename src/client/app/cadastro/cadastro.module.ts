// Angular Imports
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// This Module's Components
import { CadastroComponent } from './cadastro.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        CadastroComponent,
    ],
    exports: [
        CadastroComponent,
    ]
})
export class CadastroModule {

}
