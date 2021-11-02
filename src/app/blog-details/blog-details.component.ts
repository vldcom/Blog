import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/models';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBlog();
  }

  private getBlog() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlogById(id).subscribe(result => {
      this.blog = result;
    })
  }
}
