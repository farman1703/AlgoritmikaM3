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
        let value='';
        switch(right)
    {
        case 0:{  value=parseFloat(data.rates.UAH*event.target.value.replaceAll(' ',''));;break;}
        case 1:{  value=parseFloat(data.rates.USD*event.target.value.replaceAll(' ',''));;break;}
        case 2:{  value=parseFloat(data.rates.AZN*event.target.value.replaceAll(' ',''));;break;}
        case 3:{  value=parseFloat(data.rates.GBP*event.target.value.replaceAll(' ',''));;break;}
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
        let value='';
        switch(left)
    {
        case 0:{  value=parseFloat(data.rates.UAH*event.target.value.replaceAll(' ',''));;break;}
        case 1:{  value=parseFloat(data.rates.USD*event.target.value.replaceAll(' ',''));;break;}
        case 2:{  value=parseFloat(data.rates.AZN*event.target.value.replaceAll(' ',''));;break;}
        case 3:{  value=parseFloat(data.rates.GBP*event.target.value.replaceAll(' ',''));;break;}
    }
     
        
        if(value.toString().split('.').length>1)
        {   if(value.toString().split('.')[1].length>4)
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

document.querySelectorAll('.values-col-one').forEach((item,index) =>{
    item.addEventListener('click',(event) =>{
        left=index;
        document.querySelectorAll('.values-col-one').forEach((item) =>{
            item.style.backgroundColor='white';
            item.style.color='#E5E5E5'
            })
            event.target.style.backgroundColor='#833AE0';
            event.target.style.color='#FFFFFF';
       
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
        let value='';
       let valueP='';
        switch(right)
    {
        case 0:{  value=parseFloat(data.rates.UAH*inputs[0].value.replaceAll(' ',''));valueP=data.rates.UAH;break;}
        case 1:{  value=parseFloat(data.rates.USD*inputs[0].value.replaceAll(' ',''));valueP=data.rates.USD;break;}
        case 2:{  value=parseFloat(data.rates.AZN*inputs[0].value.replaceAll(' ',''));valueP=data.rates.AZN;break;}
        case 3:{  value=parseFloat(data.rates.GBP*inputs[0].value.replaceAll(' ',''));valueP=data.rates.GBP;break;}
    }
    let p=document.querySelectorAll('.valueP');
    let valueSecondP='';
    
    fetch(`https://api.exchangerate.host/latest?base=${rightValue}&symbols=${leftValue}`)
    .then((response) =>  response.json())
    .catch((error) => { alert('Error!!!')})
    .then((data) =>{ 
       
        switch(left)
    {
        case 0:{  valueSecondP=parseFloat(data.rates.UAH);break;}
        case 1:{  valueSecondP=parseFloat(data.rates.USD);break;}
        case 2:{  valueSecondP=parseFloat(data.rates.AZN);break;}
        case 3:{  valueSecondP=parseFloat(data.rates.GBP);break;}
    }
    if(valueSecondP.toString().split('.').length>1)
    {   if(valueSecondP.toString().split('.')[1].length>4)
        valueSecondP=valueSecondP.toString().split('.')[0]+'.'+valueSecondP.toString().split('.')[1].substring(0,4);
       
        valueSecondP=parseFloat(valueSecondP.toString());
    }
p[1].textContent='1 '+rightValue+'='+valueSecondP+' '+leftValue;
    
})
.catch((error) => { alert('Error!!!')})


   

   
   
        if(valueP.toString().split('.').length>1)
        {   if(valueP.toString().split('.')[1].length>4)
            valueP=valueP.toString().split('.')[0]+'.'+valueP.toString().split('.')[1].substring(0,4);
           
            valueP=parseFloat(valueP.toString());
        }

   
   
    p[0].textContent='1 '+leftValue+'='+valueP+' '+rightValue;
       
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
        
            
        })
        
    })



    document.querySelectorAll('.values-col-two').forEach((item,index) =>{
        item.addEventListener('click',(event) =>{
            right=index;
            document.querySelectorAll('.values-col-two').forEach((item) =>{
                item.style.backgroundColor='white';
                item.style.color='#E5E5E5'
                })
                event.target.style.backgroundColor='#833AE0';
                event.target.style.color='#FFFFFF';
                
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
                     let value='';
                     let valueP='';
                     switch(left)
                 {
                    case 0:{  value=parseFloat(data.rates.UAH*inputs[1].value.replaceAll(' ',''));valueP=data.rates.UAH;break;}
                    case 1:{  value=parseFloat(data.rates.USD*inputs[1].value.replaceAll(' ',''));valueP=data.rates.USD;break;}
                    case 2:{  value=parseFloat(data.rates.AZN*inputs[1].value.replaceAll(' ',''));valueP=data.rates.AZN;break;}
                    case 3:{  value=parseFloat(data.rates.GBP*inputs[1].value.replaceAll(' ',''));valueP=data.rates.GBP;break;}
                 }
                 let p=document.querySelectorAll('.valueP');
                 let valueSecondP='';
                 fetch(`https://api.exchangerate.host/latest?base=${leftValue}&symbols=${rightValue}`)
                 .then((response) =>  response.json())
                 .catch((error) => { alert('Error!!!')})
                 .then((data) =>{ 
                    
                     switch(right)
                 {
                     case 0:{  valueSecondP=parseFloat(data.rates.UAH);break;}
                     case 1:{  valueSecondP=parseFloat(data.rates.USD);break;}
                     case 2:{  valueSecondP=parseFloat(data.rates.AZN);break;}
                     case 3:{  valueSecondP=parseFloat(data.rates.GBP);break;}
                 }
                 if(valueSecondP.toString().split('.').length>1)
                 {   if(valueSecondP.toString().split('.')[1].length>4)
                     valueSecondP=valueSecondP.toString().split('.')[0]+'.'+valueSecondP.toString().split('.')[1].substring(0,4);
                    
                     valueSecondP=parseFloat(valueSecondP.toString());
                 }
                 
             p[0].textContent='1 '+leftValue+'='+valueSecondP+' '+rightValue;
                 
             })
             .catch((error) => { alert('Error!!!')})
                     
                
                     if(valueP.toString().split('.').length>1)
                     {   if(valueP.toString().split('.')[1].length>4)
                         valueP=valueP.toString().split('.')[0]+'.'+valueP.toString().split('.')[1].substring(0,4);
                        
                         valueP=parseFloat(valueP.toString());
                     }
             
                
                
                 p[1].textContent='1 '+rightValue+'='+valueP+' '+leftValue;


                     if(value.toString().split('.').length>1)
                     {   if(value.toString().split('.')[1].length>4)
                         value=value.toString().split('.')[0]+'.'+value.toString().split('.')[1].substring(0,4);
                     
                         value=parseFloat(value.toString());
                         
                     }
                     document.querySelectorAll('input')[0].value=value;
                     $( document.querySelectorAll('input')[0]).val($( document.querySelectorAll('input')[0]).val().replace(/\,/g,'.'));
                     $( document.querySelectorAll('input')[0]).val($( document.querySelectorAll('input')[0]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
                     $( document.querySelectorAll('input')[0]).val($( document.querySelectorAll('input')[0]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
                 
                 })
                 .catch((error) => { alert('Error!!!')})
            })
            
        })
        document.querySelectorAll('.values-col-one')[0].click();
        document.querySelectorAll('.values-col-two')[1].click();


