module.exports = {
    port: 3000,
    dir: {
        upload: 'uploads',
    },
    client: {
        host: 'http://localhost:5173/',
    },
    db: {
        usr : "admin", // TODO: setup global with github
        pwd : "admin",  // TODO: setup global with github
        deploy: "mongo01", // TODO: setup global with github
        db: "svelte-ecommerce" // TODO: setup global with github
    },
    mail: {
        service: 'gmail',
        auth: {
            user: 'denny.leok@gmail.com', // TODO: setup global with github
            pass: 'xjwyclputlphxntm' // TODO: setup global with github
        }
    }
};