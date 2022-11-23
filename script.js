$('input#first-input').on('input',function()
{
    $(this).val($(this).val().replace(/\,/g,'.'));
    $(this).val($(this).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
    $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
}

)
$('input#second-input').on('input',function()
{
    $(this).val($(this).val().replace(/\,/g,'.'));
    $(this).val($(this).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
    $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
}

)
let left=0;
let right=1;

let inputs=document.querySelectorAll('input');
inputs.forEach((item) => {item.value=0;} );
inputs[0].addEventListener('keyup',(event) => {
    if(event.target.value.length==0)
    {
        event.target.value=0;
    }
   let leftValue="";
   let rightValue="";
    switch(left)
    {
        case 0:{leftValue="UAH";break;}
        case 1:{leftValue="USD";break;}
        case 2:{leftValue="AZN";break;}
        case 3:{leftValue="GBP";break;}
    }
    switch(right)
    {
        case 0:{rightValue="UAH";break;}
        case 1:{rightValue="USD";break;}
        case 2:{rightValue="AZN";break;}
        case 3:{rightValue="GBP";break;}
    }
    fetch(`https://api.exchangerate.host/latest?base=${leftValue}&symbols=${rightValue}`)
    .then((response) =>  response.json())
    .catch((error) => { alert('Error!!!')})
    .then((data) =>{ 
        switch(right)
    {
        case 0:{  let value=parseFloat(data.rates.UAH*event.target.value.replaceAll(' ',''));;break;}
        case 1:{  let value=parseFloat(data.rates.USD*event.target.value.replaceAll(' ',''));;break;}
        case 2:{  let value=parseFloat(data.rates.AZN*event.target.value.replaceAll(' ',''));;break;}
        case 3:{  let value=parseFloat(data.rates.GBP*event.target.value.replaceAll(' ',''));;break;}
    }
      
        
        if(value.toString().split('.').length>1)
        {   if(value.toString().split('.')[1].length>4)
            value=value.toString().split('.')[0]+'.'+value.toString().split('.')[1].substring(0,4);
           
            value=parseFloat(value.toString());
        }
        document.querySelectorAll('input')[1].value=value;
        $( document.querySelectorAll('input')[1]).val($( document.querySelectorAll('input')[1]).val().replace(/\,/g,'.'));
        $( document.querySelectorAll('input')[1]).val($( document.querySelectorAll('input')[1]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
        $( document.querySelectorAll('input')[1]).val($( document.querySelectorAll('input')[1]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
    
    })
    .catch((error) => { alert('Error!!!')})

    
});

inputs[1].addEventListener('keyup',(event) => {
    if(event.target.value.length==0)
    {
        event.target.value=0;
    }
   let leftValue="";
   let rightValue="";
    switch(left)
    {
        case 0:{leftValue="UAH";break;}
        case 1:{leftValue="USD";break;}
        case 2:{leftValue="AZN";break;}
        case 3:{leftValue="GBP";break;}
    }
    switch(right)
    {
        case 0:{rightValue="UAH";break;}
        case 1:{rightValue="USD";break;}
        case 2:{rightValue="AZN";break;}
        case 3:{rightValue="GBP";break;}
    }
    fetch(`https://api.exchangerate.host/latest?base=${rightValue}&symbols=${leftValue}`)
    .then((response) =>  response.json())
    .catch((error) => { alert('Error!!!')})
    .then((data) =>{ 
        switch(left)
    {
        case 0:{  let value=parseFloat(data.rates.UAH*event.target.value.replaceAll(' ',''));;break;}
        case 1:{  let value=parseFloat(data.rates.USD*event.target.value.replaceAll(' ',''));;break;}
        case 2:{  let value=parseFloat(data.rates.AZN*event.target.value.replaceAll(' ',''));;break;}
        case 3:{  let value=parseFloat(data.rates.GBP*event.target.value.replaceAll(' ',''));;break;}
    }
      
        
        if(value.toString().split('.').length>1)
        {   if(value.toString().split('.')[0].length>4)
            value=value.toString().split('.')[0]+'.'+value.toString().split('.')[1].substring(0,4);
           
            value=parseFloat(value.toString());
        }
        document.querySelectorAll('input')[0].value=value;
        $( document.querySelectorAll('input')[0]).val($( document.querySelectorAll('input')[0]).val().replace(/\,/g,'.'));
        $( document.querySelectorAll('input')[0]).val($( document.querySelectorAll('input')[0]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
        $( document.querySelectorAll('input')[0]).val($( document.querySelectorAll('input')[0]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
    
    })
    .catch((error) => { alert('Error!!!')})

    
});
inputs.forEach((item) => {item.addEventListener('keydown',(event) => {
    if(event.target.value==0)
    {
        event.target.value='';
    }
});})


