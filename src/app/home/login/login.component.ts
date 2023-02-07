import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login(aaa: any): void {
    console.log('aaa', aaa);
    console.log('this.usuario', this.usuario);
    console.log('this.senha', this.senha);
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        console.log('auntenticado com sucesso');
        this.router.navigate(['animais']);
      }, (error) => {
        alert('Usuário ou senha inválido!');
        console.log('error', error);
      }
    );
  }

}
