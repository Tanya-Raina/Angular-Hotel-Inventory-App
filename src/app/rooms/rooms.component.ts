import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { DatePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, JsonPipe, SlicePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [DatePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, JsonPipe, SlicePipe, DecimalPipe]
})
export class RoomsComponent implements OnInit {
  // we can create a property and use it in the template
  // use interpolation {{}} in rooms.component.html
  hotelName = 'The Grand Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenities: 'AC, TV, Wifi',
      price: 1000,
      photos: 'https://www.hotelroomsearch.net/im/hotel/uk/london/royal-northumberland-hotel-1.jpg',
      checkinTime: new Date('21-Apr-2022'),
      checkoutTime: new Date('22-Apr-2022'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Super Deluxe',
      amenities: 'AC, TV, Wifi, Fridge',
      price: 2000,
      photos: 'https://www.hotelroomsearch.net/im/hotel/uk/london/royal-northumberland-hotel-1.jpg',
      checkinTime: new Date('21-Apr-2022'),
      checkoutTime: new Date('22-Apr-2022'),
      rating: 3.5382
    },
    {
      roomNumber: 3,
      roomType: 'Luxury',
      amenities: 'AC, TV, Wifi, Fridge, Pool',
      price: 15000,
      photos: 'https://www.hotelroomsearch.net/im/hotel/uk/london/royal-northumberland-hotel-1.jpg',
      checkinTime: new Date('21-Apr-2022'),
      checkoutTime: new Date('22-Apr-2022'),
      rating: 2.6
    }
  ]

  constructor() { } // constructor is called when the component is created

  ngOnInit(): void { // ngOnInit is called when the component is initialized
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

// To debug, we can use the browser's developer tools
// In Sources, under webpack://, in the . folder, we can see the source code
// We can set breakpoints in the source code
// Also cmd+P to search for files
