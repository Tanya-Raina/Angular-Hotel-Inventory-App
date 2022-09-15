import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.sass']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id: number = 0;

  // id$ !: Observable<number>; // this is a stream
  //A representation of any set of values over any amount of time.

  id$ = this.router.paramMap.pipe(
    map(params => params.get('roomid'))
  );

  ngOnInit(): void {
  }

}
