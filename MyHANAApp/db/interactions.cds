//namespace app.interactions;

using {
    Country,
    Currency,
    cuid,
    managed
} from '@sap/cds/common';

context app.interactions {
    
    type BusinessKey : String(10);
    type Price       : Decimal(10, 2);
    type Text        : String(1024);

    entity Headers : cuid, managed {
        items   : Composition of many Items
                      on items.interaction = $self;
        partner : BusinessKey;
        country : Country;
    };

    entity Items : cuid {
        interaction : Association to Headers;
        text        : localized Text;
        date        : DateTime;

        @Semantics.amount.currencyCode: 'currency'
        price       : Price;
        currency    : Currency;
    };

    
 
 entity POSDATA {
        MANDT               : Integer;
        DOCDATE             : Date;
        PCODE               : String(400);
        DOCNUM              : String(400);
        ITEMCODE            : String(400);
        PDESC               : String(400);
        DOCTIME             : Time;
        ITEMDESC            : String(400);
        ITEMTYPE            : String(400);
        ITEMQTY             : Decimal(9, 2);
        PRICE               : Decimal(9, 2);
        TOTPRICE_EXCLTAX    : Decimal(9, 2);
        DOCAMT              : Decimal(9, 2);
        DOCTAX              : Decimal(9, 2);
        TAX01TYPE           : String(400);
        TAX01CODE           : String(400);
        TAX01DESC           : String(400);
        TAX01AMT            : Decimal(9, 2);
        TAX02TYPE           : String(400);
        TAX02CODE           : String(400);
        TAX02DESC           : String(400);
        TAX02AMT            : Decimal(9, 2);
        TAX03TYPE           : String(400);
        TAX03CODE           : String(400);
        TAX03DESC           : String(400);
        TAX03AMT            : Decimal(9, 2);
        TAX04TYPE           : String(400);
        TAX04CODE           : String(400);
        TAX04DESC           : String(400);
        TAX04AMT            : Decimal(9, 2);
        CHARGE              : Decimal(9, 2);
        EMPLOYEEAMT         : Decimal(9, 2);
        EMPLOYECODE         : String(400);
        CASHAMT             : Decimal(9, 2);
        FOREXAMT            : Decimal(9, 2);
        BELOW8AMT           : Decimal(9, 2);
        REGUSAMT            : Decimal(9, 2);
        PGPALLADIUMAMT      : Decimal(9, 2);
        VODAFONEAMT         : Decimal(9, 2);
        STCOFINDIAAMT       : Decimal(9, 2);
        DELYVERAMT          : Decimal(9, 2);
        CISCOAMT            : Decimal(9, 2);
        CRAZEALVOUCHERAMT   : Decimal(9, 2);
        MCKINSEYAMT         : Decimal(9, 2);
        VOUCHERAMT          : Decimal(9, 2);
        AIRLINESPACKAEGEAMT : Decimal(9, 2);
        MASTERCARDAMT       : Decimal(9, 2);
        VISACARDAMT         : Decimal(9, 2);
        AMERICANEXPAMT      : Decimal(9, 2);
        ACCORPASSAMT        : Decimal(9, 2);
        SODEXOPASSAMT       : Decimal(9, 2);
        DAILAMEALAMT        : Decimal(9, 2);
        RUPAYCARDAMT        : Decimal(9, 2);
        QUICKWALLETAMT      : Decimal(9, 2);
        BINGECARDAMT        : Decimal(9, 2);
        FREECHARGEAMT       : Decimal(9, 2);
        PAYTMAMT            : Decimal(9, 2);
        JIOMONEYAMT         : Decimal(9, 2);
        BTCAMT              : Decimal(9, 2);
        BTCCODE             : String(400);
        COUPON              : Decimal(9, 2);
        DOCTYPE             : String(400);
        KOTTYPE             : String(400);
        DISCOUNT            : Decimal(9, 2);
        DISCCODE            : String(400);
        TIP                 : Decimal(9, 2);
        RDOFF               : Decimal(9, 2);
        PAX                 : Decimal(9, 2);
        CURR                : String(400);
        RETURNAMT           : Decimal(9, 2);
        SACHSNCODE          : String(400);
        NC_EMPLOYE          : String(400);
        NCREMARK            : String(400);
        DOCVOID             : String(400);
        DOCDESC_VOID        : String(400);
        VTIME               : String(400);
        ORDER_TYPE          : String(400);
        OUTLET_CODE         : String(400);
        MASTEROCARDAMT      : Decimal(9, 2);
        DINERSAMT           : Decimal(9, 2);
        DISCOVERCARDAMT     : Decimal(9, 2);
        DISCDESC            : String(400);
        QTY                 : String(400);
        FILE_NAME_OLD       : String(400);
        TAX05TYPE           : String(400);
        TAX05CODE           : String(400);
        TAX05DESC           : String(400);
        TAX05AMT            : Decimal(9, 2);
        TAX06TYPE           : String(400);
        TAX06CODE           : String(400);
        TAX06DESC           : String(400);
        TAX06AMT            : Decimal(9, 2);
        TAX07TYPE           : String(400);
        TAX07CODE           : String(400);
        TAX07DESC           : String(400);
        TAX07AMT            : Decimal(9, 2);
        TAX08TYPE           : String(400);
        TAX08CODE           : String(400);
        TAX08DESC           : String(400);
        TAX08AMT            : Decimal(9, 2);
        TAX09TYPE           : String(400);
        TAX09CODE           : String(400);
        TAX09DESC           : String(400);
        TAX09AMT            : Decimal(9, 2);
        UPLOADED_DATE       : Timestamp;
        PHONEPAYAMT         : Decimal(9, 2);
        AMAZONOFFLINEAMT    : Decimal(9, 2);
        SWIGGYDINERAMT      : Decimal(9, 2);
        FILE_NAME           : String(20);
    };
    
    

    entity POSDATA_LOOKUP_GLCODE {
        ELEMENT_NAME   : String(400);
        VALUE_LINKED   : Boolean;
        ELEMENT_LINKED : String(400);
        ELEMENT_VALUE  : String(400);
        GL             : String(400);
        GL_DESC        : String(400);
        REMARKS        : String(400);
    };

    entity POSDATA_LOOKUP_PCODE {
        PCODE        : String(400);
        PCODE_DESC   : String(400);
        COMPANY      : String(400);
        COMPANY_DESC : String(400);
        PCENTER      : String(400);
        PCENTER_DESC : String(400);
        BPLACE       : String(400);
        BPLACE_DESC  : String(400);
        PLANT        : String(400);
        PLANT_DESC   : String(400);
        CCENTER      : String(400);
        CCENTER_DESC : String(400);
        SLOC         : String(400);
        SLOC_DESC    : String(400);
    };

    entity POS_BUDGET_UPLD {
        CODE   : String(400);
        DATE   : Date;
        SALE_TYPE: String(20);
        BUDGET : Decimal(17, 2);
    };

    entity POS_CLUSTER_MASTER {
        ID                 : Integer;
        REGION             : String(20);
        STATE              : String(20);
        CITY               : String(20);
        CIRCLE_MANAGER     : String(50);
        CLUSTER_MANAGER    : String(50);
        STORE_OPENING_DATE : String(20);
        CODE               : String(400);
        BRAND_NAME         : String(50);
        OUTLET_TYPE        : String(200);
        MANAGED_BY         : String(200);
        OUTLET_NAME        : String(400);
    };

    entity PERSON {
        PERSONID  : Integer not null;
        FIRSTNAME : String(100);
        LNAME     : String(100);
    }
}
