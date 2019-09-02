import { Injectable } from '@angular/core';
import { Article } from '../domain/data-definitions';
import { ARTICLES } from '../domain/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  /**
   * Gets all articles where is published date is before todays
   * date. Allows for articles to be scheduled to be published
   */
  getArticles(): Article[] {
    return ARTICLES.filter(article => article.date <= new Date()).sort((a1, a2) => a2.date.getTime() - a1.date.getTime());
  }

  /**
   * Gets the article with the given id
   * @param id The id of the article to retrieve
   */
  getArticle(id: number): Article {
    return ARTICLES.find(article => article.id === id);
  }

  /**
   * Gets the image url to be used for an article
   * @param article The article to construct the image url for
   */
  getImageUrl(article: Article): string {
    return article.image.startsWith("http")? article.image : "assets/articles/" + article.image;
  }

  getAllTags(): Set<string> {
    var tags = new Set<string>();
    this.getArticles().map(a => a.tags).reduce((a, b) => a.concat(b)).forEach(tag => tags.add(tag));
    return tags;
  }
}
