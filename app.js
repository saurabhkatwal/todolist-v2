const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/',function(req,res){
var jday=new Date();
var currDay=jday.getDay();
var day='';
switch(currDay){
    case 0:
        day='sunday';
        break;
    case 1:
        day='monday';
        break;
    case 2:
        day='tuesday';
        break;
    case 3:
        day='wednesday';
        break;
    case 4:
        day='thursday';
        break;
    case 5:
        day='friday';
        break;
    case 6:
        day='saturday';
        break;
    default:
        console.log('error: the current day is '+currDay);
        break;
}
res.render('list',{kindOfDay:day});
})
app.listen(3000,function(){
    console.log('server is running at port 3000');
})