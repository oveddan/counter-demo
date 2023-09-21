// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number = 0;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number = number + 3;
    }

    function incrementBy(uint256 x) public {
        number = number + x;
    }

    function decrementBy(uint256 x) public {
        number = number - x;
    }
}
