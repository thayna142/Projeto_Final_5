import { Component, OnInit } from '@angular/core';

// 1. Importa dependências
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  // 3. Atributos
  private apiKey = 'f6b1d5dc3f4c47c483446e353984603f'; // Obtenha de newsapi.org
  private apiQuery = 'flores'; // Palavra chave das notícias
  private apiItens = 10; // Quantidad e notícias à exibir (máx. 20)
  public apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&language=pt&q=${this.apiQuery}`;
  public newsList: any; // Armazena as notícias obtidas da API

  constructor(

    // 2. Injeta dependência
    private http: HttpClient
  ) { }

  ngOnInit() {

    // 4. Obtendo as notícias da API (JSON)
    this.http.get(this.apiURL).subscribe(
      (data: any) => {

        // 5. Atribui à view de notícias
        this.newsList = data.articles.slice(0, this.apiItens);
      }
    );
  }

  // 6. Acessa o site com a notícias completa
  readNews(link: any) {
    window.open(link);
    return false;
  }

}
