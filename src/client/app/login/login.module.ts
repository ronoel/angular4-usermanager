// Angular Imports
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// This Module's Components
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        SharedModule, LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {

}
