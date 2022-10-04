import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  countries = [
    {
      name: "Brazil",
      cities: ["Rio de Janeiro", "São Paulo", "Blumenau"]
    },

    {
      name: "United Kingdom",
      cities: ["London", "Manchester", "Liverpool"]
    },

    {
      name: "United States",
      cities: ["New York", "Chicago", "Houston"]
    },

    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"]
    }
  ]
  countryControl!: FormControl;
  cityControl!: FormControl;
  cities$!: Observable<string>;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges.subscribe(value => {
      this.router.navigate([value]);
    });

    this.countryControl = new FormControl("");

    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    );
  }
}
