///////// firebase init //////////////
var admin = require('firebase-admin');
var serviceAccount = require('../hexoschoolnodejsclass-firebase-adminsdk-2ywy9-1ef4910cb3.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hexoschoolnodejsclass.firebaseio.com',
});
let fireData = admin.database();
/////////////////////////////////////////////////////////

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

var ejsLocals = require('ejs-locals');
app.engine('ejs', ejsLocals);
app.set('view engine', 'ejs');
app.set('views', './views');

let todosRef = fireData.ref(`todos`);

app.get('/', (req, res) => {
  todosRef.once('value', snapshot => {
  let  todoitems = snapshot.val();
  res.render('index', { todoitems });
  });
});

app.post('/addtodoitem',(req,res)=>{
    let content = req.body.content;
    let todosRefPush = todosRef.push();
    todosRefPush.set({content}).then(()=>{
        todosRef.once('value',snapshot=>{
            res.send({
                "success":true,
                "value":snapshot.val()
            });
        });
    });
});

app.post('/removeitem',(req,res)=>{
    let id = req.body.id;
    todosRef.child(id).remove().then(()=>{
        todosRef.once('value',snapshot=>{
            res.send({
                "success":true,
                "value":snapshot.val()
            });
        });
    });
})

// app.get('/user', (req, res) => {
//     res.render('user');
// });
// app.get('/search', (req, res) => {
//     res.render('search');
// });
// app.post('/searchText', (req, res) => {
//     console.log('------------------------------------');
//     console.log(req.body);
//     console.log('------------------------------------');
//     res.render('index');
// });

var port = process.env.PORT || 3000;
app.listen(port);
