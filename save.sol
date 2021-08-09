// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.4.22;
//pragma solidity >=0.7.0 <0.9.0;

contract Storage{
    
    string time;
    string source;
    bool tmp;
    uint public emission;
    string b = "calculation a";
    
    function calculate(string input_mycalculate, uint input_material) public{

    if (keccak256(abi.encodePacked(input_mycalculate)) == keccak256(abi.encodePacked(b)))
        emission = input_material * 3 / 2;//solidity isn't support integer
    else
        emission = input_material * 5 / 2;//solidity isn't support integer
    }
    
    function set(string memory input_time, string memory input_source) public {
    time = input_time;
    source = input_source;
    }
    
    function get() public view returns (string, uint, string) {
        return (source, emission, time);
    }
}
 //record time / material / factor source