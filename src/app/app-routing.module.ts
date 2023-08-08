import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './components/choice/choice.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path:"", component: ChoiceComponent},
  {path: "posts", component: PostComponent},
  {path: "posts/:active", component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
