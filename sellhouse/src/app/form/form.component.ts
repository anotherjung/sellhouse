import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; //form12

import { AngularFirestore } from 'angularfire2/firestore'; //form91firebase
import { Observable } from 'rxjs'; //form91firebase

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  title = 'form partial ';

  items: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {}


}
