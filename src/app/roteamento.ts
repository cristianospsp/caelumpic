import { Routes , RouterModule } from '@angular/router';

import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { Page404Component } from './pages/page404/page404.component';

const rotasDaApp: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', component: Page404Component}
]

export const roteamento = RouterModule.forRoot(rotasDaApp)