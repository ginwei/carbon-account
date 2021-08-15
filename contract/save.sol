// SPDX-License-Identifier: GPL-3.0
//pragma solidity ^0.4.2;
pragma solidity >=0.7.0 <0.9.0;

contract Storage{

    string b = "calculation a";
    struct UserInfo {
        string time;
        string source;
        uint emission;
    }
    mapping (string => UserInfo) users;
    
    function test() public view returns(string memory) {
        return b;
    }//test

    function saveData(string memory input_time, string memory input_source, string memory input_mycalculate, uint input_material) public returns (uint){
        users[input_source].time = input_time;
        if (keccak256(abi.encodePacked(input_mycalculate)) == keccak256(abi.encodePacked(b)))
            users[input_source].emission = input_material * 3 / 2;//solidity isn't support integer
        else
            users[input_source].emission = input_material * 5 / 2;//solidity isn't support integer

        return 123;//test
    }
    
    function search(string memory input_source) public view returns (uint, string memory) {
        return (users[input_source].emission, users[input_source].time);
    }
}
