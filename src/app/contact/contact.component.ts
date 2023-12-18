import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

   message: string = '';
  chatHistory: string[] = [];
  showChat: boolean = false;

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatHistory.push(this.message);
      this.message = '';
    }
  }

  toggleChat(): void {
    this.showChat = !this.showChat;
  }

  closeChat(): void {
    this.showChat = false;
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  constructor() { }


}
