import { Component, Inject } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: any[] = [];

  constructor(@Inject(PostService) private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}