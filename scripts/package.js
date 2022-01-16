const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jobyssy:nwhacks2021@cluster0.gzeua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connect();

async function connect() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db("users");
        console.log("Conection Succesful");
    } catch (ex) {
        console.error(ex)
    }
    finally {
        client.close();
    }

}