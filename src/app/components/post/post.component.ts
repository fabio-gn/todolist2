import { UserPost } from './../../interfaces';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServiceService } from 'src/app/posts-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  constructor(public postServ:PostsServiceService, public route: ActivatedRoute){}
  isActive:any;
  posts:UserPost[] = this.postServ.postsArray
  activeImages = [
    "https://emojis.wiki/emoji-pics/openmoji/red-circle-openmoji.png",
    "https://emojiguide.org/images/emoji/c/1i8wv7knlwt9c.png"
  ]
  ngOnInit(){
    this.isActive = this.route.snapshot.paramMap.get('active')? true : false;
  }

}
