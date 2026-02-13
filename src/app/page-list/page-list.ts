import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  imports: [NgForOf],
  templateUrl: './page-list.html',
  styleUrl: './page-list.css',
})
export class PageList {
  @Input() pages: any[] = [];
}
