FROM mongo:latest

COPY transport.incidents.json /transport.incidents.json

COPY transport.lignes.json /transport.lignes.json

COPY transport.stations.json /transport.stations.json

COPY transport.transports.json /transport.transports.json

CMD mongoimport --uri mongodb://mongodb:27017/transport --collection incidents --drop --jsonArray --file /transport.incidents.json && \
    mongoimport --uri mongodb://mongodb:27017/transport --collection lignes --drop --jsonArray --file /transport.lignes.json && \
    mongoimport --uri mongodb://mongodb:27017/transport --collection stations --drop --jsonArray --file /transport.stations.json && \
    mongoimport --uri mongodb://mongodb:27017/transport --collection transports --drop --jsonArray --file /transport.transports.json


