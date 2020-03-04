import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage implements OnInit {
articleData: any=[];
  constructor(public apiService: ApiService) {
    console.log("ceci est un log");  
   }

  ngOnInit() {
    this.getAllArticles()
  }

  getAllArticles() 
  { console.log("my getAllArticle");
   this.apiService.getList().subscribe(response=> {
     console.log("C'est mon log réponse " + response);
     this.articleData = response;
   })
  }

}
