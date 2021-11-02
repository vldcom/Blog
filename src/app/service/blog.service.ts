import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BLOGLIST } from '../database/blogDetailsDb';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  public getBlogList() {
    const blogList = of(BLOGLIST);
    return blogList;
  }

  public getBlogById(id: number) {
    const blog = BLOGLIST.find(blog => blog.Id === id);
    return of(blog);
  }
}