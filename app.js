const express=require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
var tasks='';
app.get('/', function (req, res) {
    var jday = new Date();
    var currDay = jday.getDay();
    var day = '';
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var today = new Date();
    day = today.toLocaleDateString('en-US', options);
    res.render('list', {
        kindOfDay: day,
        newTask:tasks
    });
});
app.post('/', function (req, res) {
     tasks = req.body.tname;
     res.redirect('/');
});
app.listen(3000, function () {
    console.log('server is running at port 3000');
});