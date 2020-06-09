import {Component, Input, OnInit, Output} from '@angular/core';
import {NewsApiService} from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news: any = [];
  tabSelected: string;

  constructor(private newsApi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit(): void {
    this.showNews('business');
  }

  showNews(category: string) {
    this.newsApi.getNews('us', category)
      .subscribe(data => {
        return this.news = Object.values(data)[2];
      });
  }

  onTabSelected(tab: string) {
    this.tabSelected = tab;
  }

}
