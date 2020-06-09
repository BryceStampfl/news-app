import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apikey} from '../../environments/apikey';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey = '26623eaece5f46d684ea5ae9b72f778b';

  constructor(private http: HttpClient) {
  }

  getNews(country: string, category: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: apikey.apiKey,
        country,
        category,
      }
    });
  }


}
