const cash=document.getElementById('cash')
const cashPS=document.getElementById('cashPS')
const upp1=document.getElementById('upp1')
let firstValue=0;
let i = 1;
let interval = setInterval( increment, 100);
let arrCost=[
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
];

let arrCashPS=[
    1,
    15,
    55,
    220,
    1240,
    9700,
];

let arrCashPSsum=
[
    0,
    0,
    0,
    0,
    0,
    0,

];

let arrCount=[0,0,0,0,0,0];
// подгрузка и выгрузка 
if(localStorage.getItem('i')!= null){
    i = +localStorage.getItem('i');
    firstValue = +localStorage.getItem('firstValue');
let tmp=0;
for(m=0; m<6; m++)
{ 
   arrCashPS[m]=+localStorage.getItem(`arrCashPS${m}`);
}

for(m=0; m<6; m++)
{ 
   arrCashPSsum[m]=+localStorage.getItem(`arrCashPSsum${m}`);
}

for(m=0; m<6; m++)
{ 
   arrCount[m]=+localStorage.getItem(`arrCount${m}`)  ;
}

for(m=0; m<6; m++)
{ 
   arrCost[m]=+localStorage.getItem(`arrCost${m}`);
   
}
    }
    window.onbeforeunload = function() {                
	localStorage.setItem('i', i);
    localStorage.setItem('firstValue', firstValue);
    for(m=0; m<6; m++)
    { 
    tmp= arrCashPS[m];
    localStorage.setItem(`arrCashPS${m}`,tmp);
    }

    for(m=0; m<6; m++)
    { 
    tmp= arrCashPSsum[m];
    localStorage.setItem(`arrCashPSsum${m}`,tmp);
    }
    for(m=0; m<6; m++)
    { 
       tmp= arrCount[m];
       localStorage.setItem(`arrCount${m}`,tmp);
       
    }
    
    for(m=0; m<6; m++)
    { 
    tmp= arrCost[m];
    localStorage.setItem(`arrCost${m}`,tmp);
   
    }
};
//
function digit(numUpp)
{
    if(arrCost[numUpp]>=1000 && arrCost[numUpp]<1000000)
    {
        document.getElementById('costUpp' +numUpp).innerHTML="Цена: "+Number((arrCost[numUpp]/1000).toFixed(1))+" K";
    }
    else if(arrCost[numUpp]<1000000){
       document.getElementById('costUpp' +numUpp).innerHTML="Цена: "+Number((arrCost[numUpp]).toFixed(1));
    }   
    else if( arrCost[numUpp]>=1000000)
    {
        document.getElementById('costUpp' +numUpp).innerHTML="Цена: "+Number((arrCost[numUpp]/1000000).toFixed(1))+" M";   
    }
    
}

function notEnoughtMoney()
{
    console.log('not enought money for uppgrade');
}

function fullUpp()
{
    console.log('you have bought all the upgrades of this type');
}

function clickplus()
{
    document.getElementById('cash').innerHTML=Number((i++).toFixed(1));
}

function plusUpp(numUpp)
{
    if(numUpp==0 && arrCount[numUpp]==35)
    {
     fullUpp();
    }

    else if(arrCount[numUpp]==50)
    {
        fullUpp();
    }

    else if(i<arrCost[numUpp])
    {
        notEnoughtMoney();
    }
    else if(i>=arrCost[numUpp])
{ 
    console.log('- '+ arrCost[numUpp]);
        i-=arrCost[numUpp];
        firstValue+=arrCashPS[numUpp];
        arrCost[numUpp]+=arrCost[numUpp]/5;
       arrCount[numUpp]++;
    console.log('costUpp '+numUpp); 
    arrCashPSsum[numUpp]+=arrCashPS[numUpp];
    document.getElementById('upp' +numUpp).innerHTML="+ "+arrCashPSsum[numUpp]+" в сек"  +"<br> у вас "+ arrCount[numUpp]; 
   digit(numUpp);
}}
function increment(){
   
    i +=  firstValue/10;
    console.log(i);
    document.getElementById('cash').innerHTML=Number((i).toFixed(1));
    document.getElementById('cashPS').innerHTML="+ "+firstValue+" /сек";
    for(m=0; m<6; m++){
        document.getElementById('upp' +m).innerHTML="+ "+arrCashPSsum[m]+" в сек"  +"<br> у вас "+ arrCount[m]; 
        digit(m);
    }
    

if(firstValue==561535)
{
    alert('Ну и нахуй ты игру прошел, че делать теперь? ну радуйся хули');
    firstValue=999999;
}
}



