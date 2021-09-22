import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    ListPostComponent,
    AddPostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
