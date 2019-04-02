import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'list-produtos', loadChildren: './pages/list-produtos/list-produtos.module#ListProdutosPageModule' },
  { path: 'list-usuarios', loadChildren: './pages/list-usuarios/list-usuarios.module#ListUsuariosPageModule' },
  { path: 'cadastro-produtos', loadChildren: './pages/cadastro-produtos/cadastro-produtos.module#CadastroProdutosPageModule' },
  { path: 'cadastro-usuarios', loadChildren: './pages/cadastro-usuarios/cadastro-usuarios.module#CadastroUsuariosPageModule' },
  { path: 'login', loadChildren: './paginas/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
