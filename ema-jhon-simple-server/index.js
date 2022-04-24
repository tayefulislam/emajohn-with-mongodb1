const express = require('express');
const cors = require('cors');

require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

// middleware

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rivaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {

        await client.connect()

        const productCollection = client.db("emaJohn1").collection("products");


        app.get('/products', async (req, res) => {

            const query = {};

            const corsur = productCollection.find(query);

            const result = await corsur.toArray()

            // const result = await corsur.limit(40).toArray()
            // get limit items


            res.send(result)


        })


        app.get('/pageCount', async (req, res) => {
            const query = {}
            const cursor = productCollection.find(query)
            const count = await cursor.count()

            res.send({ count })
        })




    }

    finally {



    }


}

run().catch(console.dir)




app.get('/', (req, res) => {
    res.send('John server is running for ema')
})

app.listen(port, () => {
    console.log('EMA IS RUNNING ON', port)
})