import { Component } from '@angular/core';
import { PageList } from "./page-list/page-list";
import { SearchBar } from "./search-bar/search-bar";
import { Wikipedia } from './wikipedia';

@Component({
  selector: 'app-root',
  imports: [SearchBar, PageList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pages = [];

  constructor(private Wikipedia: Wikipedia) {}

  onTerm(term: string) {
    this.Wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
