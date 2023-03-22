import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mensagem: ['', [Validators.required]],
    });
  }

  whats() {}

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  enviar() {
    let nome = this.form.get('nome').value;
    let email = this.form.get('email').value;
    let mensagem = this.form.get('mensagem').value;

    console.log(nome);
    console.log(email);
    console.log(mensagem);

    this.abrirUrl(
      `https://api.whatsapp.com/send?phone=552135002094&text=Ola%20me%20chamo%20${nome}%20meu%20email%20é%20${email}%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20entrar%20em%20contato`
    );
  }
}
