var express = require('express');
var mysql = require('mysql');
var cors = require('cors')

var app = express();
app.use(express.json());
app.use(cors());

//Set the connection parameters
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'itemsdb'
});

// test the connection
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("successful connection")
    }
})


app.get('/',function(req,res){
    res.send('Hi! word')
});


//Show all items
app.get('/api/items',(req,res)=>{
    connection.query("SELECT * FROM item",(error, rows)=>{
        if(error){
            throw error;

        }else{
        res.send(rows)
    }
    })
});

//Show a single items
app.get('/api/items/:id_item',(req,res)=>{
    connection.query("SELECT * FROM item WHERE id_item = ?",[req.params.id_item],(error, row)=>{
        if(error){
            throw error;

        }else{
            res.send(row)
            //Example  of how to return a single item,specifying a data.

            //res.send(row[0].description)
    }
    })
});

//Creating a new item
app.post('/api/items',(req,res)=>{
    let data = {description:req.body.description,price:req.body.price,stock:req.body.stock};
    let sql=  "INSERT INTO item SET ?";

    connection.query(sql,data,function(error,results){
        if(error){
            throw error;

        }else{
            res.send(results)
        }
    })
});


//Edit a  item
app.put('/api/items/:id_item',(req,res)=>{
    let id_item = req.params.id_item;
    let description = req.body.description;
    let price = req.body.price;
    let stock = req.body.stock;
    let sql = "UPDATE item SET description = ?, price = ?, stock = ? WHERE id_item = ?";
    connection.query(sql,[description,price,stock,id_item], function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});


//Delete a  item
app.delete('/api/items/:id_item',(req,res)=>{
    connection.query('DELETE FROM item WHERE id_item = ?', [req.params.id_item], function(error, rows){
        if(error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});



const port = process.env.PORT || 3000 ;



app.listen(port, function(){
    console.log('Server is running on port: ' + port);
});