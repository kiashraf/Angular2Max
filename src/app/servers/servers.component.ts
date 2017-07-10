import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  template:`<app-server></app-server>
<p>
    This is nested Component, I added serverS Component's app-serverS selector in appComponent and then called the app-server Component of sever(notice singular)
</p>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
