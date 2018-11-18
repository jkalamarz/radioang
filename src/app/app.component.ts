import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})

class Radio {
  id: number;
  name: string;
}

export class AppComponent {
  title = 'My app';
  d = [1, 2, 6, 3];
}

export class CustomerComponent implements OnInit {
  radios : Observable<Radio[]>;

  constructor(private http:HttpClient) {}

  ngOnInit() {
      this.radios = this.http
          .get<Radio[]>("/radioapi/values");
  }
}