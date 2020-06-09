import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {z
  @Output() tabClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onTabClicked(tab: string): void {
    this.tabClicked.emit(tab);
  }
}
