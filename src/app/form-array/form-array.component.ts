import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    topics: new FormArray([])
  })

  get topics() {
    return this.form.get('topics') as FormArray
  }
  addTopic(topic: HTMLInputElement) {
    let trimmed = topic.value.trim();
    if(trimmed != '')
    (this.topics).push(new FormControl(topic.value, Validators.required));
    topic.value = '';
  }
}