namespace documents.db;

entity GPHeaders2 {
        // key ID                  : UUID;
    key RGP_DOC_NUM         : String(10);
        REFERENCE_TYPE      : String(2);
        RGP_NRGP_DATE       : Date;
        DOC_DATE            : Date;
        BILL_TO_PARTY       : String(10);
        BILL_TO_PARTY_NAME  : String(200);
        SHIP_TO_PARTY       : String(10);
        SHIP_TO_PARTY_NAME  : String(200);
        ADDRESS             : String(200);
        STATE_CODE          : String(3);
        GSTIN               : String(15);
        TRANSPORTER_CODE    : String(10);
        TRANSPORTER_NAME    : String(200);
        TRANSPORTER_NOTE    : String(200);
        NOTE_NRGP           : String(600);
        REMARK              : String(600);
        CONTNR              : String(10);
        APPRX_VALUE         : String(10);
        WEIGHT              : String(10);
        STORE               : String(4);
        PLANNED_RETURN_DATE : Date;
        VEHICLE_NO          : String(12);
        REQUESTED_BY        : String(20);
        RECEIVED_BY         : String(20);
        DEPARTMENT          : String(200);
        EWAYBILL_NO         : String(40);
        LR_NO               : String(10);
        LR_DATE             : Date;
        CONTACT_NO          : String(30);
        TRANSPORT_MODE      : String(200);
        PLACE_OF_SUPPLY     : String(100);
        toGPItems           : Composition of many GPItems2
                                  on toGPItems.RGP_DOC_NUM = RGP_DOC_NUM;
}

entity GPItems2 {
        // key ID               : UUID;
        // parent           : Association to GPHeaders;

    key ITEM_KEY       : String(10);
    key RGP_DOC_NUM    : String(10);
        REFERENCE_TYPE : String(2);
        DOC_DATE       : Date;
        ITEM_NO        : String(2);
        MATERIAL_NO    : String(40);
        MATERIAL_DESC  : String(300);
        ITEM_TEXT      : String(300);
        QUANTITY       : String(15);
        PLANT          : String(4);
        STORE_LOCATION : String(4);
        RATE           : Decimal(17, 2);
        VALUE          : Decimal(17, 2);
        UOM            : String(3);
        TAXCODE        : String(2);
        CGST           : Decimal(17, 2);
        SGST           : Decimal(17, 2);
        IGST           : Decimal(17, 2);
        CESS           : Decimal(17, 2);
}

entity Partners {
    
    BILL_TO_PARTY      : String(10);
    BILL_TO_PARTY_NAME : String(200);
 key   SHIP_TO_PARTY      : String(10);
    SHIP_TO_PARTY_NAME : String(200);
    ADDRESS            : String(200);
    STATE_CODE         : String(3);
}
