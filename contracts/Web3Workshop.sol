// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

/// @title Web3Workshop
/// @author NFT Buying Wojak and Frens
/// @notice A contract to buy event tickets in Web3
/// @dev Unaudited contract for learning purposes only
//  Note: contract is equivalent to class keyword
contract Web3Workshop {

  // STATE VARIABLES 
  // State variables live on the blockchain and act like storage
  // The more state variables the more the contract costs to deploy to chain
  uint public ticketsSold;
  uint public maxAttendees;
  uint public basePrice;

  // Address are primitive types in Ehereum
  // Think of them like your email or bank number
  // see: https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=address#address
  address public owner;

  // Do we want a bool for if someone is attending, 
  // or rather how many tickets they have, 
  // so can that be an array?

  // Used to create a custom data type
  struct Attendent {
    address attendent;
    uint ticketQuantity;
  }

  // public keyword creates an automatic getter
  // mapping is equivalent to JS Object, a key-value pair / hash map 
  // see: https://solidity-by-example.org/mapping/
  /// @notice holds public state of the attendee list
  mapping(address => Attendent) public attendees;


  /// EVENTS 
  // Events alert the front end to what happened
  event TicketBought(uint tickets);

  /// @notice This constructor sets up the max amount of event attendees
  constructor(uint _maxAttendees, uint _basePrice) {
    ticketsSold = 0;
    maxAttendees = _maxAttendees;

    // Whoever calls the account is the contract owner
    owner = msg.sender;
    basePrice = _basePrice;
  }

  /// The function modifier can be added to function signature
  /// This runs the the modifier when the function is called
  /// https://solidity-by-example.org/function-modifier/
  /// @notice modifier checks ticket availablity
  modifier canAttend() {
    // require conditional to be true, or reverts back to previous state
    // gas fee to pay for computation is still consumed.
    // see: https://solidity-by-example.org/gas/
    // see: https://www.geeksforgeeks.org/solidity-error-handling/ 
    require(ticketsSold < maxAttendees, "All sold out.");
    // indicates to call function. 
    // Can be placed before or after code and used multiple times
    _; 
  }

  /// @notice calculate and check if funds send match total ticket price
  modifier checkPayment(uint _amountOfTickets) {
    require(_amountOfTickets * basePrice <= msg.value, "Payment sent is less than total ticket price");
    _;
  }

  /// @notice allows user to buy ticket if not sold out
  /// first checks if tickets are not sold out - canAttend
  /// then checks total payment matches funds sent - checkPayment
  function buyTicket(uint _amountOfTickets) external payable canAttend checkPayment(_amountOfTickets) returns (bool) {
    // Pay contract for ticket
    payable(owner).transfer(msg.value);

    // Add ticket owner to mapping which holds our smart contract's "database"  
    attendees[msg.sender].attendent = msg.sender;
    attendees[msg.sender].ticketQuantity = _amountOfTickets;

    // Increase tickets sold count by num of tickets.
    ticketsSold = ticketsSold +  _amountOfTickets;

    emit TicketBought(_amountOfTickets);

    // Return bool to confirm
    return true;
  }
}