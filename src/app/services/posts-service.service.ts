import { Injectable, OnDestroy } from '@angular/core';
import { PostsI } from "../models/posts.model";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NotificationService } from "./notification.service";
import { apiBase } from "../utils/api";

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
    //this.notificationService.notifAdd(postData.title);
    let newParams = new HttpParams();
    newParams = newParams.append('print', 'NEWEST');
    this.subscriberCreate = this.http.post( apiBase.url,
      postData, { headers: new HttpHeaders({
          "new-header": "updated-header"
        }),
        params: newParams
      })
      .subscribe(
        () => this.getPosts(),
        (error) => console.log(error),
      );
  }
  getPosts() {
    return this.http.get<{[key: string]: PostsI}>(apiBase.url)
      .pipe(map((response) => {
        const array = [];
        for (const key in response) {
          if(response.hasOwnProperty(key)) {
            array.unshift({...response[key], id: key});
          }
        } return array;
      }));
  }
  deletePosts() {
    this.notificationService.notifDelete();
    return this.http.delete(apiBase.url);
  }
}
