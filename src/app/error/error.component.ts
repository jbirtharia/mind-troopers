import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage: string = "An Error Occured. Please contact to System Admin!!!";

  constructor() { }

  ngOnInit(): void {
  }

}
