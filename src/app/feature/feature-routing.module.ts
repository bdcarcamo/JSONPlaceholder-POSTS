import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListPostComponent } from './posts/list-post/list-post.component';
import { PostComponent } from './posts/post.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostComponent,
    loadChildren: () => import('./posts/posts.module').then( i => i.PostsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
