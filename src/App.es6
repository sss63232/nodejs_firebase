

// get random user data
//
// $.ajax({
//     url: 'https://randomuser.me/api/?results=5',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });


// ////////////// firebase code ///////////////////////

// // Initialize Firebase
// var config = {
//     apiKey: 'AIzaSyCBitU1DARRjgEreH0xyRnaQApxdHeEdGk',
//     authDomain: 'hexoschoolproject.firebaseapp.com',
//     databaseURL: 'https://hexoschoolproject.firebaseio.com',
//     projectId: 'hexoschoolproject',
//     storageBucket: 'hexoschoolproject.appspot.com',
//     messagingSenderId: '711809536821',
// };
// firebase.initializeApp(config);

// let txt = document.getElementById('txt');
// let send = document.getElementById('send');
// let list = document.getElementById('list');

// let todosRef = firebase.database().ref('todos');

// send.addEventListener('click', () => {
//   todosRef.push({
//     content: txt.value,
//   });
//   txt.value = '';
// });

// // 資料一有變動，自動執行 callback
// todosRef.on('value', snapshot => {
//   list.innerHTML = '';
//   let data = snapshot.val();
//   for (let key in data) {
//     let li = document.createElement('li');
//     li.textContent = data[key].content;
//     li.setAttribute('data-key', key);
//     list.appendChild(li);
//   }

//   list.addEventListener('click', e => {
//     let key = e.target.dataset.key;
//     if (key) {
//       todosRef.child(key).remove();
//     }
//   });
// });


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

var ejsLocals = require('ejs-locals');
app.engine('ejs',ejsLocals);
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/user',(req,res)=>{
    res.render('user');
});
app.get('/search',(req,res)=>{
    res.render('search');
});
app.post('/searchText',(req,res)=>{
    console.log('------------------------------------');
    console.log(req.body);
    console.log('------------------------------------');
    res.render('index');
});

var port = process.env.PORT||3000;
app.listen(port);