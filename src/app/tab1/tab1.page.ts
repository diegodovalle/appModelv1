import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private socialSharing: SocialSharing) {}

  shareEmail() {
    this.socialSharing
      .canShareViaEmail()
      .then(() => {
        this.socialSharing
          .shareViaEmail('Body', 'Subject', ['recipient@example.org'])
          .then(() => {
            // Success!
          })
          .catch(() => {
            console.log('Erro');
          });
      })
      .catch(() => {
        console.log('Erro Fora');
      });
  }
}
