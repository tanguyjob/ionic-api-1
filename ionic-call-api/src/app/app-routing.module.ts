import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleListPage } from  './article-list/article-list.page';
import { ArticleDetailPage } from './article-detail/article-detail.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'list', loadChildren:() => import ('./article-list/article-list.module').then(m => m.ArticleListPageModule )},
  { path: 'detail/:plu', loadChildren:() => import ('./article-list/article-list.module').then(m => m.ArticleListPageModule )}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
