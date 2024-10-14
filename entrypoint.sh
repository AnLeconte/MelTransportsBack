mongoimport --host mongo --db transport --jsonArray --file docker-entrypoint-initdb.d/datas/transport.incidents.json
mongoimport --host mongo --db lignes --jsonArray --file docker-entrypoint-initdb.d/datas/transport.lignes.json
mongoimport --host mongo --db stations --jsonArray --file docker-entrypoint-initdb.d/datas/transport.stations.json
mongoimport --host mongo --db transport --jsonArray --file docker-entrypoint-initdb.d/datas/transport.transports.json
