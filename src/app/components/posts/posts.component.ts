import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PostsI } from "../../models/posts.model";
import { PostsServiceService } from "../../services/posts-service.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postForm: NgForm;
  postsArray: PostsI[] = [];
  isLoading: boolean;
  subscriberGet: any;
  subscriberDelete: any;
  constructor(public postService: PostsServiceService) {
  }

  ngOnInit(): void {
    this.onGetPosts();
  }
  ngOnDestroy(): void {
    this.subscriberGet.unsubscribe();
    this.subscriberDelete.unsubscribe();
  }

  onCreatePost(postData: PostsI) {
    this.postService.createPost(postData);
    this.postForm.reset();
  }
  onGetPosts() {
    this.isLoading = true;
    this.subscriberGet = this.postService.getPosts()
      .subscribe( posts => {
        this.isLoading = false;
        this.postsArray = posts;
      }, error => console.log(error));
  }
  onDeletePosts() {
      this.subscriberDelete = this.postService.deletePosts()
        .subscribe( () => {
          this.postsArray = [];
            this.postService.getPosts();
        }, error => console.log(error),
        );
  }
}
