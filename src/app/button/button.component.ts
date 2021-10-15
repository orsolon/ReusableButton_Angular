import { Component, Input, Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  @Output() textBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  @Output() imgBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  onTextBtnClick() {
    this.textBtnClickEmt.emit('You have clicked on a text button.');
  }

  onImgBtnClick() {
    this.imgBtnClickEmt.emit('You have clicked on an image button.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
