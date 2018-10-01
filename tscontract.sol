pragma solidity ^0.4.0;

contract TsContract {

    struct TsData {

        string ctyry_Code;

        string Year;

        string Ts;

    }

    TsData[] public TsContracts;

 

    function addTs(string _ctyry_Code, string _Year, string _Ts) public returns(uint) {

        TsContracts.length++;

        TsContracts[TsContracts.length-1].ctyry_Code = _ctyry_Code;

        TsContracts[TsContracts.length-1].Year = _Year;

        TsContracts[TsContracts.length-1].Ts = _Ts;

        return TsContracts.length;

    }

 

    function getTsCount() public constant returns(uint) {

        return TsContracts.length;

    }

 

    function getTs(uint index) public constant returns(string, string, string) {

        return (TsContracts[index].ctyry_Code, TsContracts[index].Year, TsContracts[index].Ts);

    }

}