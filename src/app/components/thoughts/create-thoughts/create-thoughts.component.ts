import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrl: './create-thoughts.component.css',
})
export class CreateThoughtsComponent {
  constructor(private thoughtService: ThoughtService, private router: Router, private formBuilder: FormBuilder) {}

  form!: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      model: 'modelo1',
      favorite: false
    })
  }

  saveThought() {
    if (this.form.valid) {
      this.thoughtService.create(this.form.value).subscribe(() => {
        this.router.navigate(["/list"])
      })
    }
  }

  cancelThought() {
    this.router.navigate(["/list"])
  }

  activeButton(): string {
    if (this.form.valid) {
      return 'botao'
    }
    return 'botao__desabilitado'
  }
}
