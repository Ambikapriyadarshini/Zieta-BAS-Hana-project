using documents.db as documentsdb from '../db/data-model';

service DocumentService{
	entity GPHeaders as projection on documentsdb.GPHeaders2;
	entity GPItems as projection on documentsdb.GPItems2;
	entity GPPartners as projection on documentsdb.Partners;
}
