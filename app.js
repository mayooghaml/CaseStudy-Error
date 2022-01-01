const express = require('express'); 
const bodyParser = require('body-parser'); //part#1 point2
const path = require ('path'); 
const cors = require('cors');

const nav= [
    {
        link:"/books",title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook", //part#2 point6
        title:"Add Book"
    },
    {
        link:"/authors/addauthor", //part#2 point6
        title:"Add Author"
    }
];

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter')(nav);  //part#1 point3  part#2 point6
const booksRouter = require('./src/routes/booksroute')(nav);//part#2 point6
const authorsRouter = require('./src/routes/authorsroute')(nav);//part#2 point6
// const bodyParser = require('body-parser');

const app = new express; //part#1 point1


app.set('views', './src/views'); 
app.set('view engine','ejs'); 

app.use(cors()); //part#2 point7
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{
       nav,
       title: "Library"
    });//#part1
    
})//#part1





app.listen(5000, ()=>{//part#1 point5
    console.log("Server Ready on 5000"); 
});