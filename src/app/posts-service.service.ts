import { Injectable } from '@angular/core';
import { UserPost } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  postsArray!:UserPost[];
  constructor() {
    this.getData()
  }


  // postsArray:UserPost[] = [
  //   {
  //     id: 123,
  //     body: "ma che delusione",
  //     title: "Incredibile",
  //     active: true
  //   },
  //   {
  //     id: 321,
  //     body: "NON ME L'ASPETTAVO!!!!!!!!!!!!!!",
  //     title: "NO VABBE",
  //     active: false
  //   },
  //   {
  //     id: 143,
  //     body: "mmmmm non so, l'altra volta pareva un po' meglio",
  //     title: "non mi convince",
  //     active: true
  //   },
  //   {
  //     id: 156,
  //     body: "BELLA REGA!",
  //     title: "primo",
  //     active: true
  //   },
  //   {
  //     id: 123,
  //     body: "ma che delusione",
  //     title: "Incredibile",
  //     active: true
  //   },
  //   {
  //     id: 321,
  //     body: "NON ME L'ASPETTAVO!!!!!!!!!!!!!!",
  //     title: "NO VABBE",
  //     active: false
  //   },
  //   {
  //     id: 143,
  //     body: "mmmmm non so, l'altra volta pareva un po' meglio",
  //     title: "non mi convince",
  //     active: true
  //   },
  //   {
  //     id: 156,
  //     body: "BELLA REGA!",
  //     title: "primo",
  //     active: true
  //   },
  //   {
  //     id: 123,
  //     body: "ma che delusione",
  //     title: "Incredibile",
  //     active: true
  //   },
  //   {
  //     id: 321,
  //     body: "NON ME L'ASPETTAVO!!!!!!!!!!!!!!",
  //     title: "NO VABBE",
  //     active: false
  //   },
  //   {
  //     id: 143,
  //     body: "mmmmm non so, l'altra volta pareva un po' meglio",
  //     title: "non mi convince",
  //     active: true
  //   },
  //   {
  //     id: 156,
  //     body: "BELLA REGA!",
  //     title: "primo",
  //     active: true
  //   }
  // ]

getData(){
  fetch("http://localhost:3000/posts").then(res => {
  if (res.ok){
    return res.json()
  } else {
    throw new Error('rabadaban')
  }
}).then(data =>{
  // return data
  this.postsArray = data
}).catch( err =>{
  console.log(err)
})
}


}
