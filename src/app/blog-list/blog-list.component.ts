import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogList: Blog[] = [
    { Name: 'Florin 1', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 2', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 3', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 4', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 5', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 6', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 7', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 8', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 9', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 10', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 11', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
    { Name: 'Florin 12', Id: 789, Description: 'Aici am facut chestia ZZ', Content: `FS FSSSS` },
  ]

  slicedPages = this.blogList.slice(0, 5);

  constructor() { }

  ngOnInit(): void {
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
