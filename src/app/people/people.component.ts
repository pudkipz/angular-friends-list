import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Input() favorite: string | null = null;
  @Output() favoriteHandler = new EventEmitter<string>();
}
