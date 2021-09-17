// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Storage{
    
    struct UserInfo {
        string time;
        string source;
        uint emission;
    }
    
    mapping (string => UserInfo) public users;

    function saveStandard(uint input_material, uint weight, string memory input_time, string memory input_source) 
    public{
        
        users[input_source].time = input_time;
        uint Combustion = weight * input_material / 10;
        uint Process = weight * input_material / 10;
        users[input_source].emission = Combustion + Process;
    }
    
    
    function saveMass(string memory input_time, uint in_material, uint in_carbon, uint out_material, uint out_carbon, string memory input_source) 
    public {
        
        users[input_source].emission = uint256(458) / uint256(125) * (in_material * in_carbon / 100 - out_material * out_carbon / 100);
        users[input_source].time = input_time;
    }
    
    
    function saveMeasurement(string memory input_time, string memory input_source, uint concentration, uint flow) 
    public {
        users[input_source].emission = concentration * flow;
        users[input_source].time = input_time;
    }
    
    
    function search(string memory input_source) public view returns (uint, string memory) {
        return (users[input_source].emission, users[input_source].time);
    }
}