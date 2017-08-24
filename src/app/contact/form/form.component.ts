import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public fb: FormBuilder;

  public form: FormGroup;

  constructor() { 

    this.fb = new FormBuilder();

  }

  ngOnInit() {

  }

  onSubmit() {

  }

}
