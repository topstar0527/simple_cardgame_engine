/*

  --- WE ARE NOT USING THIS FILE ANYMORE, THIS FILE IS JUST FOR REFERENCE ---

  MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine

  Use this js file to write your project outline and your core game logic.
  You will use your browser's javascript console to interact with the game.

  Game Description:
  
    Dealer has 2 cards, 1 face up and 1 face down

    Dealer gives the player 2 cards, both revealed to everyone

    Player sums up their cards, based on the amount, if it's
    <= 21, they will ask the dealer for more or stayt with 
    their current deck

    Everytime the player asks for a new card, they have to add
    that to their sum

    If the sum is 21, the player automatically wins
    If the sum is greater than 21, the player loses

    When the player stays with the deck they have and don't
    ask for anymore cards, then the dealer's face down card is
    revealed 

    Determining outcome:
      Based on the sum of the dealer's hand, if it's < 21 and the
      player's hand is greater than the dealer's, then the player
      wins

      If the dealer's hand is greater than 21, then the player also wins

      If the player's hand is less than the dealer's hand, then the dealer
      wins

      If the dealer's hand is <= 16, then the dealer gets 1 more card

  Assumptions:
    assume that we're ony dealing with numbers for cards

  Function stubs:
    deck_of_cards : Array
    dealer_hand : Array
    player_hand : Array

    - deal_cards(deck, hand){} : Takes deck, randomly removes 2 items, adds it to hand, returns deck and hand in Array 
    - sum_hand(){}
    - determine_outcome(){}
    start()
    reset(){}
    hit() {}
    stand() {}

  Call order:
    start()
      -> deal_cards()
      -> sum_hand() 
      -> display sum to player so they can decide
         whether to hit or stand
    
    hit(deck, hand)
      -> randomly take card from deck
      -> add card to hand
      -> determine_outcome()

    stand(hand)
      -> determine_outcome()
      -> returns sum of hand

    


    sum_hand(dealer_hand) >= sum_hand(player_hand)
 */

 let deck_of_cards = [1,2,3,4,5,6,7,8,9,10]
 let dealer_hand = []
 let player_hand = []

/**
 * Deal 2 cards to the player and the dealer 
 */
function deal_cards () {
  for (let i = 0; i < 2; i++) {
    let card = deck_of_cards.splice(Math.floor(Math.random() * deck_of_cards.length), 1)
    player_hand.push(card)
  }

  for (let i = 0; i < 2; i++) {
    let card = deck_of_cards.splice(Math.floor(Math.random() * deck_of_cards.length), 1)
    dealer_hand.push(card)
  }
}

