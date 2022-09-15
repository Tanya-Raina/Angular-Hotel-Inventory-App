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

  selectedRoom!: RoomList;

  title = 'hotel-inventory';

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
    this.title = 'change-hotel-inventory';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Luxury',
      amenities: 'AC, TV, Wifi, Fridge, Pool',
      price: 15000,
      photos: 'https://www.hotelroomsearch.net/im/hotel/uk/london/royal-northumberland-hotel-1.jpg',
      checkinTime: new Date('29-Apr-2022'),
      checkoutTime: new Date('30-Apr-2022'),
      rating: 2.2,
    }
    // this.roomList.push(room); -> this will add the room but we are modifying the original array
    this.roomList = [...this.roomList, room]; // -> this will create a new array and add the room to it
    // using spread operator
    // this will maintain the immutability of the array
  }
}

// To debug, we can use the browser's developer tools
// In Sources, under webpack://, in the . folder, we can see the source code
// We can set breakpoints in the source code
// Also cmd+P to search for files
