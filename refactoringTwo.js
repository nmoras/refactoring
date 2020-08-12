//function should do one thing
//before
function emailClients(clients) {
    clients.forEach((client) => {
        const clientRecord = database.lookup(client);
        if(clientRecord.isActive()){
            email(client);  
        }
    });
};

//after
const emailClients = (clients) => {
    clients
        .filter(isClientActive)
        .forEach(email);
}

const isClientActive = (client) => {
    const clientRecord = database.lookup(client)
    return clientRecord.isActive();
}