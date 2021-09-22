import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'list-post', component: ListPostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '**', pathMatch: '**', redirectTo: '/posts/list-post' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
