const express = require('express');
const cors = require('cors');

require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

            // console.log('query', req.query)

            const page = parseInt(req.query.page)
            const size = parseInt(req.query.size)

            const query = {};

            const corsur = productCollection.find(query);
            let result;

            if (page || size) {
                // page 0 skip = 0 *10 get 1 to 10
                // page 1 skip = 1*10  get 11 to 20
                // page 2 skip = 3*10  get 21 to 30
                // page 3 skip = 4*10  get 31 to 40

                result = await corsur.skip(page * size).limit(size).toArray()
                // result = await corsur.skip(page * size).limit(size).toArray()
                // skip()


            }
            else {

                result = await corsur.toArray()

            }

            res.send(result)




            // const result = await corsur.limit(40).toArray()
            // get limit items





        })


        app.get('/pageCount', async (req, res) => {

            const count = await productCollection.estimatedDocumentCount()

            res.send({ count })
        })


        // get item by  ids

        app.post('/productByKeys', async (req, res) => {

            const keys = req.body;
            const ids = keys.map(id => ObjectId(id))
            const query = { _id: { $in: ids } }
            const cursor = productCollection.find(query)
            const products = await cursor.toArray()
            res.send(products)

            console.log(products)

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