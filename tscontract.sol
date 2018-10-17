pragma solidity ^0.4.0;

contract TsContract {

    struct Ts111GDP {

        string Indi_Code;
        string x2000A;
        string x2001A;
        string x2002A;
     
    }
    
     struct Ts112GDP {

        string Indi_Code;
        string x2000A;
        string x2001A;
        string x2002A;
     
    }
    
      struct Ts134GDP {

        string Indi_Code;
        string x2000A;
        string x2001A;
        string x2002A;
     
    }

    Ts111GDP[] public TsContractsV1;
    Ts112GDP[] public TsContractsV2;
    Ts134GDP[] public TsContractsV3;

 

    function addTs(string Ts111GDP_Indi_Code, string Ts111GDP_x2000A, string Ts111GDP_x2001A, string Ts111GDP_x2002A, string Ts112GDP_Indi_Code, string Ts112GDP_x2000A , string Ts112GDP_x2001A, string Ts112GDP_x2002A , string Ts134GDP_Indi_Code, string Ts134GDP_x2000A , string Ts134GDP_x2001A, string Ts134GDP_x2002A ) public returns(uint) {

        TsContractsV1.length++;

        TsContractsV1[TsContractsV1.length-1].Indi_Code = Ts111GDP_Indi_Code;
        TsContractsV1[TsContractsV1.length-1].x2000A = Ts111GDP_x2000A;
        TsContractsV1[TsContractsV1.length-1].x2001A = Ts111GDP_x2001A;
        TsContractsV1[TsContractsV1.length-1].x2002A = Ts111GDP_x2002A;
        
        TsContractsV2.length++;
        
        TsContractsV2[TsContractsV2.length-1].Indi_Code = Ts112GDP_Indi_Code;
        TsContractsV2[TsContractsV2.length-1].x2000A = Ts112GDP_x2000A;
        TsContractsV2[TsContractsV2.length-1].x2001A = Ts112GDP_x2001A;
        TsContractsV2[TsContractsV2.length-1].x2002A = Ts112GDP_x2002A;
        
         TsContractsV3.length++;

        TsContractsV3[TsContractsV3.length-1].Indi_Code = Ts134GDP_Indi_Code;
        TsContractsV3[TsContractsV3.length-1].x2000A = Ts134GDP_x2000A;
        TsContractsV3[TsContractsV3.length-1].x2001A = Ts134GDP_x2001A;
        TsContractsV3[TsContractsV3.length-1].x2002A = Ts134GDP_x2002A;

        return TsContractsV3.length;

    }

 

    function getTsCount() public constant returns(uint) {

        return TsContractsV1.length;

    }

 

    function getTs(uint index) public constant returns(string, string, string , string , string , string ) {

        return (TsContractsV1[index].x2000A, TsContractsV1[index].x2001A , TsContractsV1[index].x2002A , TsContractsV2[index].x2000A , TsContractsV2[index].x2001A, TsContractsV2[index].x2002A  );
        

    }
    
     function getTs2(uint index) public constant returns(string, string, string) {

        return (TsContractsV3[index].x2000A, TsContractsV3[index].x2001A , TsContractsV3[index].x2002A );
        

    }

}