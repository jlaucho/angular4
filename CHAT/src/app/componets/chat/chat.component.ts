import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  //title = 'Primera aplicacion';
  chats: Observable<any[]>;

  constructor ( private chat:ChatService ){
    this.chats = chat.getMensajes();
    console.log(this.chats)
  }
  ngOnInit() {
  }

}
