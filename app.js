const cash=document.getElementById('cash')
const cashPS=document.getElementById('cashPS')
const upp1=document.getElementById('upp1')
let a=b=c=d=e=f=0;

function notEnoughtMoney(){
    console.log('not enought money for uppgrade');
}

function fullUpp(){
    console.log('you have bought all the upgrades of this type')
}

function clickplus(){
       document.getElementById('cash').innerHTML=Number((i++).toFixed(1));
}

function plusUpp1(){
    if(a>100)
    {
        fullUpp()
    }
   else if(i<10 )
    {
        notEnoughtMoney();
    }
    else if(i>=10 && a<100)
    { i-=10;
        a++;
      document.getElementById('upp1').innerHTML="+ 1/сек <br> У вас "+a;
      firstValue++;
    }
}


function plusUpp2(){
    if(b>50)
    {
        fullUpp()
    }
    else if(i<100 )
    {
        notEnoughtMoney();
    }
    else if(i>=100 && b<50)
    { i-=100;
        b++;
      document.getElementById('upp2').innerHTML="+ 15/сек <br> У вас "+b;
      firstValue+=15;
    }
}

function plusUpp3(){
    if(c>30)
    {
        fullUpp()
    }
    else if(i<1000 )
    {
        notEnoughtMoney();
    }
    else if(i>=1000 && c<30)
    { i-=1000;
        c++;
      document.getElementById('upp3').innerHTML="+ 55/сек <br> У вас "+c;
      firstValue+=55;
    }
}

function plusUpp4(){
    if(d>25)
    {
        fullUpp()
    }
    else if(i<10000 )
    {
        notEnoughtMoney();
    }
    else if(i>=10000 && d<25)
    { i-=10000;
        d++;
      document.getElementById('upp4').innerHTML="+ 220/сек <br> У вас "+d;
      firstValue+=220;
    }
}

function plusUpp5(){
    if(e>15)
    {
        fullUpp()
    }
   else if(i<100000 )
    {
        notEnoughtMoney();
    }
    else if(i>=100000 && e<15)
    { i-=100000;
        e++;
      document.getElementById('upp5').innerHTML="+ 1240/сек <br> У вас "+e;
      firstValue+=1240;
    }
}

function plusUpp6(){
    if(f>10)
    {
        fullUpp()
    }
    else if(i<1000000 )
    { 
        notEnoughtMoney();
    }
    else if(i>=1000000 && f<10)
    { i-=1000000;
        f++;
      document.getElementById('upp6').innerHTML="+ 1240/сек <br> У вас "+f;
      firstValue+=9700;
    }
}

let firstValue=0;
let i = 1;
let interval = setInterval( increment, 100);

function increment(){
   
    i +=  firstValue/10;
    console.log(i);
    document.getElementById('cash').innerHTML=Number((i).toFixed(1));
    document.getElementById('cashPS').innerHTML="+ "+firstValue+" /сек";
if(firstValue==123600)
{
    alert('Ну и нахуй ты игру прошел, че делать теперь? ну радуйся хули')
    firstValue=999999;
}
}
