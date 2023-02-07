import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private urlOriginal = '';

  @Input()
  descricao = '';

  @Input()
  set url(url: string) {
    if (url.startsWith('data')) {
      console.log('url', url)
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
      console.log('url 2', this.urlOriginal);
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
