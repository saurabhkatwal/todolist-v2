const express=require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
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
        kindOfDay: day
    });
});
app.post('/', function (req, res) {
    var tasks = req.body.tname;
    console.log('task is ' + tasks);
});
app.listen(3000, function () {
    console.log('server is running at port 3000');
});