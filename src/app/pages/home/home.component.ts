import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Welcome to the Recipe App!";
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.data = data.meals || [];
      console.log(this.data);
    })
  }
}
