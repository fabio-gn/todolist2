import { Injectable } from '@angular/core';
import { UserPost } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor() { }
  postsArray:UserPost[] = [
    {
      id: 123,
      body: "ma che delusione",
      title: "Incredibile",
      active: true
    },
    {
      id: 321,
      body: "NON ME L'ASPETTAVO!!!!!!!!!!!!!!",
      title: "NO VABBE",
      active: false
    },
    {
      id: 143,
      body: "mmmmm non so, l'altra volta pareva un po' meglio",
      title: "non mi convince",
      active: true
    },
    {
      id: 156,
      body: "BELLA REGA!",
      title: "primo",
      active: true
    },
    {
      id: 123,
      body: "ma che delusione",
      title: "Incredibile",
      active: true
    },
    {
      id: 321,
      body: "NON ME L'ASPETTAVO!!!!!!!!!!!!!!",
      title: "NO VABBE",
      active: false
    },
    {
      id: 143,
      body: "mmmmm non so, l'altra volta pareva un po' meglio",
      title: "non mi convince",
      active: true
    },
    {
      id: 156,
      body: "BELLA REGA!",
      title: "primo",
      active: true
    },
    {
      id: 123,
      body: "ma che delusione",
      title: "Incredibile",
      active: true
    },
    {
      id: 321,
      body: "NON ME L'ASPETTAVO!!!!!!!!!!!!!!",
      title: "NO VABBE",
      active: false
    },
    {
      id: 143,
      body: "mmmmm non so, l'altra volta pareva un po' meglio",
      title: "non mi convince",
      active: true
    },
    {
      id: 156,
      body: "BELLA REGA!",
      title: "primo",
      active: true
    }
  ]

}
