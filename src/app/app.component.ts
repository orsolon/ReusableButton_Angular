import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Click on a button';

  textBtnConfig = {
    styles: {
      position: 'relative',
      width: '150px',
      height: '60px',
      backgroundColor: '#f92672',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '10px',
      marginTop: '30px'
    },
    text: 'Click Here'
  };

  imgBtnConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '100px'
    },
    src: './assets/push.png'
  };

  onClickEventReceived(event: string){
    this.message = event;
  }

}


