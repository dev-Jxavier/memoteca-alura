import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {
  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  form!: FormGroup;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    id && this.thoughtService.getById(id).subscribe((thought) => {
      this.form = this.formBuilder.group({
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        author: [thought.author, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: [thought.model]
      })
    })

    console.log(this.form)
  }

  editThought() {
    this.thoughtService.edit(this.form.value).subscribe(() => {
      this.router.navigate(['/list'])
    })
  }

  cancelThought() {
    this.router.navigate(['/list'])
  }

  activeButton(): string {
    if (this.form.valid) {
      return 'botao'
    }
    return 'botao__desabilitado'
  }
}
