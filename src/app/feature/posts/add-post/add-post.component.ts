import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PostsService } from './shared/services/posts.service';
import { Post } from './shared/interfaces/post.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public formPost: FormGroup;

  constructor( private postService: PostsService,
               private fb: FormBuilder ) {
                this.formPost = this.createFormGruop();
               }

  ngOnInit(): void {
    console.log( this.formPost );
  }

  createFormGruop(){
    return this.fb.group({
      id: [''],
      userId: ['', [ Validators.required, Validators.pattern('^([0-9])*$')]],
      title: ['',[ Validators.required, Validators.pattern('^[a-zA-Z ]*') ]],
      body:['',[ Validators.required, Validators.pattern('^[a-zA-Z ]*') ]]
    })
  }

  addPost(){
    console.log( this.formPost.valid );
    console.log( this.formPost );
    if ( this.formPost.valid ) {
      let post: Post = {
        id: this.formPost.get('id')?.value,
        userId: this.formPost.get('userId')?.value,
        title: this.formPost.get('title')?.value,
        body: this.formPost.get('body')?.value
      }
      this.postService.savePost( post ).subscribe(( post ) => {
        console.log('Post Guardado', post );
      })
    }
  }

}
