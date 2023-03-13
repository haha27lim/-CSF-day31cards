// Define the interface Card to represent a playing card, with a suit, a number or rank, and a value.
// The suit is represented as a string and the value is represented as a number.
  export interface Card {
    suit: string
    card: number
    value: number
  }
  
// Define the interface RemoveCard to represent a request to remove a specific card from a hand.
// It has a name property to identify the hand and a cardNum property to specify the card to remove.
  export interface RemoveCard {
    name: string
    cardNum: number
  }
  
// Define the interface Hand to represent a player's hand of cards.
// It has a name property to identify the hand and an array of Card objects.
  export interface Hand {
    name: string
    cards: Card[]
  }

// Declare two constant arrays to represent the suits and values of a deck of cards.
  export const SUIT = [ "clover", "spade", "diamond", "heart" ]
  export const VALUE = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10 ]
  
// Define a Deck class to represent a deck of cards.
// It has a deck private property to store an array of Card objects.
  export class Deck {
    private deck: Card[] = []
  
    // The constructor takes an optional count parameter to specify how many decks to create.
    // It creates count number of decks, each with 52 cards.
    constructor(count = 1) {
      for (let c = 0; c < count; c++) {
        for (let s of SUIT) {
          for (let i = 0; i < 13; i++) {
            // Add a new Card object to the deck array for each combination of suit, card, and value.
            this.deck.push({
              suit: s,
              card: i + 1,
              value: VALUE[i]
            })
          }
        }
      }
    }
  
    // Define a shuffle() method to shuffle the cards in the deck.
    // It swaps each card with another random card in the deck.
    shuffle() {
      const deckSize = this.deck.length;
      for (let i = 0; i < deckSize; i++) {
        let idx = Math.floor(Math.random() * deckSize)
        const toSwap = this.deck[idx]
        this.deck[idx] = this.deck[i]
        this.deck[i] = toSwap
      }
    }
  
    // Define a canTake() method to check if there are any cards left in the deck.
    canTake(): boolean {
      return this.deck.length > 0
    }
  
    // Define a take() method to take a specified number of cards from the top of the deck.
    // It returns an array of Card objects.
    take(count = 1): Card[] {
      return this.deck.splice(0, count)
    }
  
    // Define a dump() method to return all the cards in the deck as an array of Card objects.
    dump(): Card[] {
      return this.deck
    }
  }