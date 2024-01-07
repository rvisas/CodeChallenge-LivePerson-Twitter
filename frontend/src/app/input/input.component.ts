import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private dataService: DataService) {
  }

  searchQuery: string;
  count: number;

  searchText(searchQuery, count) {
    if (!(searchQuery.trim() != null && count <= 0)) {
      this.dataService.get_tweets(searchQuery, count).subscribe((res: any) => {
        this.dataService.changeMessage(res.data.result)
        this.searchQuery = '';
        this.count = null;
      })
    }
  }

}
