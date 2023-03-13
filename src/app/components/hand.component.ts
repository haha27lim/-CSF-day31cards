import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

  // Define a property hand of type Hand to represent the player's hand, passed in as an input from a parent component.
  @Input()
  hand!: Hand

  // Define a property onRemoveCard of type Subject<RemoveCard> to emit events when a card is removed from the hand.
  // It will be used to notify the parent component that a card has been removed.
  @Output()
  onRemoveCard = new Subject<RemoveCard>()

  // Define a method removeCard() to remove a specific card from the hand.
  // It takes an index idx to specify which card to remove.
  removeCard(idx: number) {
    console.info(`>>> card: ${idx}`)
    // Emit an event on the onRemoveCard Subject with a RemoveCard object containing the hand's name 
    // and the index of the card to remove.
    this.onRemoveCard.next({
      name: this.hand.name,
      cardNum: idx
    })
  }
}
