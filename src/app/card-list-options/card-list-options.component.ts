import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from '../news-api.service';

@Component({
  selector: 'app-card-list-options',
  templateUrl: './card-list-options.component.html',
  styleUrls: ['./card-list-options.component.css']
})
export class CardListOptionsComponent implements OnInit {
  tab = 'general';
  country = 'us';

  @Input()
  public set tabSelected(tab: string) {
    console.log(tab);
    this.tab = tab;
    this.updateComponent();
  }

  articles: any = [];


  constructor(private newsApiService: NewsApiService) {
  }

  ngOnInit(): void {
    this.newsApiService.getNews('us', 'general').subscribe(data => {
      return this.articles = Object.values(data)[2];
    });
  }

  updateComponent() {
    this.newsApiService.getNews(this.country, this.tab).subscribe(data => {
      return this.articles = Object.values(data)[2];
    });
  }
}
