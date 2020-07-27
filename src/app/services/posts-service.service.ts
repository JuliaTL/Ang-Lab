import { Injectable, OnDestroy } from '@angular/core';
import { PostsI } from "../models/posts.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService implements OnDestroy {
  subscriberCreate: any;
  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  ngOnDestroy(): void {
    this.subscriberCreate.unsubscribe();
  }

  createPost(postData: PostsI) {
    this.notificationService.notifAdd(postData.title);
    this.subscriberCreate = this.http.post('https://ang-lab.firebaseio.com/posts.json', postData)
      .subscribe();
  }
  getPosts() {
    return this.http.get<{[key: string]: PostsI}>('https://ang-lab.firebaseio.com/posts.json')
      .pipe(map((response) => {
        const array = [];
        for (const key in response) {
          if(response.hasOwnProperty(key)) {
            array.push({...response[key], id: key});
          }
        } return array;
      }));
  }
  deletePosts() {
    this.notificationService.notifDelete();
    return this.http.delete('https://ang-lab.firebaseio.com/posts.json');
  }
}
