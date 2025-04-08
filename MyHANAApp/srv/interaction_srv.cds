using app.interactions from '../db/interactions';
using {sap} from '@sap/cds-common-content';

service CatalogService {

    @odata.draft.enabled: true
    entity Interactions_Header as projection on interactions.Headers;

    entity Interactions_Items  as projection on interactions.Items;
    // entity POSDATAHDI as projection on interactions.POSDATA_HDI;
    entity PERSONHDI as projection on interactions.PERSON;

    @readonly
    entity Languages           as projection on sap.common.Languages;
}
