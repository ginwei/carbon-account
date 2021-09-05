// SPDX-License-Identifier: GPL-3.0
//pragma solidity ^0.4.2;
pragma solidity >=0.7.0 <0.9.0;

contract Storage{
    
    struct UserInfo {
        uint256 index;
        string[] time;
        string[] source;
        uint256[] emission;
    }
    
    mapping (string => UserInfo) public users;

    function saveStandard(uint input_material, uint weight, string memory input_time, string memory input_source) 
    public returns (string memory, uint, uint, string memory){
    
        uint256 id = users[input_source].index + 1;
        users[input_source].index = id;
        
        users[input_source].time[id] = input_time;
        uint256 Combustion = weight * input_material;
        uint256 Process = weight * input_material;
        users[input_source].emission[id] = Combustion + Process;
        
        return (input_source, Combustion, Process, input_time);
    }
    
    
    function saveMass(string memory input_time, uint in_material, uint in_carbon, uint out_material, uint out_carbon, string memory input_source) 
    public returns (string memory, uint, string memory){
        
        uint256 id = users[input_source].index + 1;
        users[input_source].emission[id] = uint256(458) / uint256(125) * (in_material * in_carbon - out_material * out_carbon);
        
        return (input_source, users[input_source].emission[id], input_time);
    }
    
    
    function saveMeasurement(string memory input_time, string memory input_source, uint concentration, uint flow) 
    public returns (string memory, uint, string memory){
        
        uint256 id = users[input_source].index + 1;
        users[input_source].emission[id] = concentration * flow;
        
        return (input_source, users[input_source].emission[id], input_time);
    }
    
    
    function search(string memory input_source) public view returns (uint, string memory) {
        uint id = 0;
        while (id <= users[input_source].index) {
            id += 1;
            return (users[input_source].emission[id], users[input_source].time[id]);
        }
    }
}




