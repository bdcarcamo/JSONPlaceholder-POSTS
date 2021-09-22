import { Component, OnInit } from '@angular/core';
import { PostsService } from '../add-post/shared/services/posts.service';
import { Post } from '../add-post/shared/interfaces/post.interface';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [];

  constructor( private postService: PostsService ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(( post ) => {
      this.posts = post;
    })
  }

  editarPost( post: Post ){
    this.postService.updatePost( post ).subscribe(( post )=> {
      console.log( 'Post Actualizado', post )
    })
  }

  eliminarPost( index: number ){
    this.postService.delPost( index ).subscribe(( post ) =>{
      console.log('Post Eliminado', post);
    })
  }

}
