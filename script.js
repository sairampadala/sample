var container=document.createElement('div');
container.setAttribute('class','container');
var row=document.createElement('div');
row.setAttribute('class','row');
var presentindex=1;
onClickData();

var previous=document.createElement('button');
previous.setAttribute('class','col-1 bg-success');
previous.innerHTML='Previous';
previous.onclick=function(){
    if(presentindex!=1){
        presentindex--;
        onClickData();
    }
};

var next=document.createElement('button');
next.setAttribute('class','col-1 bg-primary');
next.innerHTML='Next';

var button1=document.createElement('button');
button1.setAttribute('class','col-1 bg-warning');
button1.innerHTML='1';
button1.onclick=function(){
    presentindex=1;
    onClickData();
};

var button2=document.createElement('button');
button2.setAttribute('class','col-1 bg-danger');
button2.innerHTML='2';
button2.onclick=function(){
    presentindex=2;
    onClickData();
};

var button3=document.createElement('button');
button3.setAttribute('class','col-1 bg-primary');
button3.innerHTML='3';

var button4=document.createElement('button');
button4.setAttribute('class','col-1 bg-success');
button4.innerHTML='4';
var button5=document.createElement('button');
button5.setAttribute('class','col-1 bg-warning');
button5.innerHTML='5';
var button6=document.createElement('button');
button6.setAttribute('class','col-1 bg-danger');
button6.innerHTML='6';
var button7=document.createElement('button');
button7.setAttribute('class','col-1 bg-primary');
button7.innerHTML='7';
var button8=document.createElement('button');
button8.setAttribute('class','col-1 bg-secondary');
button8.innerHTML='8';
var button9=document.createElement('button');
button9.setAttribute('class','col-1 bg-danger');
button9.innerHTML='9';
var button10=document.createElement('button');
button10.setAttribute('class','col-1 bg-warning');
button10.innerHTML='10';



row.append(previous,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,next);
container.append(row);
document.body.append(container);

function onClickData(){
    fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        CreateTableFromJSON(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function CreateTableFromJSON(data) {
        var final=presentindex*10;
        var initial=final-9;
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        var table = document.createElement("table");   

        var tr = table.insertRow(-1);

        for (var i =  0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i =  initial-1; i < final; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

}
