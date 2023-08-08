import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{
  whichActive:any
  isHome!:boolean;
  isPosts!:boolean;
  isActivePosts!:boolean;
  constructor( public route: ActivatedRoute){


  }
 counter = 0;
 home = "nav-link active"
 posts = "nav-link"
 postInattivi = "nav-link"
  ngOnChanges(){
    this.counter ++;

    // if(this.route.snapshot.paramMap.get('')){
    //   this.isHome == true;
    //   }
    //   if (this.route.snapshot.paramMap.get('/posts')){
    //     this.isPosts == true;
    //   }
    //   if (this.route.snapshot.paramMap.get('/posts/:active')){
    //     this.isActivePosts == true;
    //   }



  }
  //

}
