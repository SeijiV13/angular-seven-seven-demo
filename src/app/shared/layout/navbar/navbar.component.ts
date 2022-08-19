import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() loggedIn  = false;
  @Output() actionEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(action: string) {
    this.actionEmitter.emit(action);
  }

}
