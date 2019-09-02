import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain/data-definitions';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticle(id);
  }

  getImageUrl(){
    return this.articleService.getImageUrl(this.article);
  }

}
