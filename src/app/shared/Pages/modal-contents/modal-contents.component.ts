 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-contents',
  templateUrl: './modal-contents.component.html',
  styleUrls: ['./modal-contents.component.scss']
})
export class ModalContentsComponent implements OnInit {




  _title:string = '';
  @Input()
  set Title(title: string) {
    this._title = title;
  }

  @Output() Closed = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
   
  Close(){
    this._title='';
    this.Closed.emit();;
  }
}
