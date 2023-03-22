import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private socialSharing: SocialSharing, private file: File) {}

  compartilharTexto() {
    this.socialSharing.share('Compartilhando texto');
  }

  compartilharLink() {
    this.socialSharing.share('', '', '', 'https://www.abrconsultoria.com.br');
  }

  async compartilharImagem() {
    let lisaImg = await this.resolveLocalFile();
    this.socialSharing
      .share('', '', lisaImg.nativeURL)
      .then((s) => {
        this.file.removeFile(this.file.cacheDirectory, lisaImg.name);
      })
      .catch((e) => {
        alert('Erro: ' + e);
      });
  }

  async resolveLocalFile() {
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/`);
  }
}
