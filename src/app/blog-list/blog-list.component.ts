import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/models';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogList: Blog[] = [];
  slicedPages: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogList().subscribe(result => {
      this.blogList = result;
      this.slicedPages = this.blogList.slice(0, 5);
    })
  }

  public onPageChange(event: any){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex =  startIndex + event.pageSize;
    
    if(endIndex > this.blogList.length) {
      endIndex = this.blogList.length;
    }

    this.slicedPages = this.blogList.slice(startIndex, endIndex);
  }
}
