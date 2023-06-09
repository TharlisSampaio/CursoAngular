import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit{

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  public submitForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm);
      console.log(this.cadastroForm.value.firstName);
    }

  }

}
