pragma solidity ^0.4.0;

contract TsContract {

    struct TsData {

        string Indi_Code;
        string x2000A;
        string x2001A;
        string x2002A;
        string x2003A;
        string x2004A;
     
    }

    TsData[] public TsContracts;

 

    function addTs(string _Indi_Code, string _x2000A, string _x2001A, string _x2002A, string _x2003A, string _x2004A ) public returns(uint) {

        TsContracts.length++;

        TsContracts[TsContracts.length-1].Indi_Code = _Indi_Code;

        TsContracts[TsContracts.length-1].x2000A = _x2000A;

        TsContracts[TsContracts.length-1].x2001A = _x2001A;
        
        TsContracts[TsContracts.length-1].x2002A = _x2002A;
        
        TsContracts[TsContracts.length-1].x2003A = _x2003A;
        
        TsContracts[TsContracts.length-1].x2004A = _x2004A;
        
     

        return TsContracts.length;

    }

 

    function getTsCount() public constant returns(uint) {

        return TsContracts.length;

    }

 

    function getTs(uint index) public constant returns(string, string, string , string , string , string ) {

        return (TsContracts[index].Indi_Code, TsContracts[index].x2000A, TsContracts[index].x2001A , TsContracts[index].x2002A , TsContracts[index].x2003A , TsContracts[index].x2004A   );
        

    }

}