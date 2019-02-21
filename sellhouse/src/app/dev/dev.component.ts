import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  title = 'dev';

  items: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    console.log(11,this.title);
  }

}
