import { Component, OnInit } from '@angular/core';
import { Deck, Hand, RemoveCard } from './models';

// Define an array of player names.
const PLAYERS = [ 'fred', 'barney', 'wilma', 'betty' ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// It implements the OnInit interface to specify a lifecycle method to run when the component is initialized.
export class AppComponent implements OnInit {
  
  // Define a property deck of type Deck to represent the deck of cards.
  deck!: Deck

  // Define a property players of type Hand[] to represent the players' hands.
  players: Hand[] = []

  // Implement the OnInit interface's ngOnInit() method to initialize the component.
  ngOnInit(): void {
    // Create a new Deck instance and shuffle it.
    this.deck = new Deck()
    this.deck.shuffle()
    console.info(this.deck.dump())

    // For each player name, create a new `Hand` instance with the player's name and 5 cards taken from the deck.
    for (let n of PLAYERS) {
      this.players.push({
        name: n,
        cards: this.deck.take(5)
      })
    }

    console.info(this.players)
  }

  // Define a method removeCard() to remove a specific card from a player's hand.
  // It takes an event of type RemoveCard to specify the name of the player and the index of the card to remove.
  removeCard(event: RemoveCard) {
    console.info('>>> event: ', event)
    // Find the player's hand in the players array.
    const p = this.players.find(v => v.name == event.name)
    // If the player's hand is found, remove the card at the specified index.
    p?.cards.splice(event.cardNum, 1)
  }

}
