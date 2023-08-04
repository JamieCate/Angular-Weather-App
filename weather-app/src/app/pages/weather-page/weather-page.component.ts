import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {

  location: any;
  searchResults: any;
  displayIcon: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  sendLocation() {
    this.api.getWeather(this.location).subscribe(data => {
      this.searchResults = data
      console.log(this.searchResults)
    })
  }

}
