import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() roomList: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  // this output is an event, when a room is selected we want to tell the parent component
  // so it can mark the room as booked
  // so we are just sending one selected room with its details back


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      console.log('title changed');
    }
  }


  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
    // this is the event emitter, we are emitting the selected room back to the parent
  }
}
