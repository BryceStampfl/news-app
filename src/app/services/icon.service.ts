import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() {
  }


  getIcon(site: string) {
    return 'assets/images/' + site.toLowerCase().replace(/\s/g, '-') + '.png';
  }
}
