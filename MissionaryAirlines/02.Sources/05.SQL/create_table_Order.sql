CREATE TABLE ma."ORDER"
(
    "ID" INTEGER NOT NULL PRIMARY KEY,
    "IDCUSTOMER" INTEGER NOT NULL,
    "IDPROGRAM" INTEGER NOT NULL,
	"IDPLAN" INTEGER NOT NULL,
	"STATUS" VARCHAR NOT NULL,
	"ADDITIONALREQUEST" VARCHAR
);
