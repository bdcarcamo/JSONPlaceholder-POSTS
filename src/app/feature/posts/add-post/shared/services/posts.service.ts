import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  headers = new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8',
  });

  constructor( private http: HttpClient ) { }

  getPosts(){
    return this.http.get<Post[]>( `${ environment.urlFakeApi }`);
  }

  savePost( data: Post){
    return this.http.post(`${ environment.urlFakeApi }`, data, { headers: this.headers });
  }

  updatePost( post: Post ){
    return this.http.put( `${ environment.urlFakeApi }/${post.id}`, post, { headers: this.headers } );
  }

  delPost( index: number ){
    return this.http.delete( `${ environment.urlFakeApi }/${index}`);
  }
}
