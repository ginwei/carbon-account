// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Storage{
    
    struct UserInfo {
        uint index;
        mapping(uint => string) time;
        mapping(uint => string) source;
        mapping(uint => uint) emission;
    }
    
    mapping (string => UserInfo) public users;

    function saveStandard(uint input_material, uint weight, string memory input_time, string memory input_source) 
    public {
    
        uint id = users[input_source].index + 1;
        users[input_source].index = id;
        
        users[input_source].time[id] = input_time;
        uint Combustion = weight * input_material / 10;
        uint Process = weight * input_material / 10;
        users[input_source].emission[id] = Combustion + Process;
    }
    
    
    function saveMass(string memory input_time, uint in_material, uint in_carbon, uint out_material, uint out_carbon, string memory input_source) 
    public {
        
        uint id = users[input_source].index + 1;
        users[input_source].index = id;
        
        users[input_source].time[id] = input_time;
        users[input_source].emission[id] = uint256(458) / uint256(125) * (in_material * in_carbon - out_material * out_carbon);
    }
    
    
    function saveMeasurement(string memory input_time, string memory input_source, uint concentration, uint flow) 
    public {
        
        uint id = users[input_source].index + 1;
        users[input_source].index = id;
        
        users[input_source].time[id] = input_time;
        users[input_source].emission[id] = concentration * flow;
    }
    
    
    function search(string memory input_source, uint id) public view returns (uint, string memory) {
        return (users[input_source].emission[id], users[input_source].time[id]);
    }
}