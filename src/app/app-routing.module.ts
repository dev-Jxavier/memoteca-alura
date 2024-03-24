import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { RemoveThoughtComponent } from './components/thoughts/remove-thought/remove-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "create",
    component: CreateThoughtsComponent
  },
  {
    path: "list",
    component: ListThoughtsComponent
  },
  {
    path: "thought/removeThought/:id",
    component: RemoveThoughtComponent
  },
  {
    path: "thought/editThought/:id",
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
