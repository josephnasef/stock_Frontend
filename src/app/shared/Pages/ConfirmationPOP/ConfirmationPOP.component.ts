import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ConfirmationPOP',
  templateUrl: './ConfirmationPOP.component.html',
  styleUrls: ['./ConfirmationPOP.component.css']
})
export class ConfirmationPOPComponent implements OnInit {

  constructor() { }
  @Output() DeleteItemEvent = new EventEmitter<string>();
  @ViewChild('myModalClose') modalClose;
  closeModel()
  {
    this.modalClose.nativeElement.click();
    // this.modalClose.close();
  }
  DeleteItem() {
    debugger
    this.DeleteItemEvent.emit();
  }
  Header: string = '';
  // Title: string = '';
  Body: string = '';
  ngOnInit() {
  }

}
