const BASE_URL ="https://open.er-api.com/v6/latest";

  const dropdowns= document.querySelectorAll(".dropdown select");
  const btn=document.querySelector("BUtton");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg= document.querySelector(".msg");



  for(let select of dropdowns){
     for(currCode in countryList){
let newOption=document.createElement("option");
newOption.innerText=currCode;
newOption.value =currCode;
if (select.name === "from" && currCode === "USD") {
  newOption.selected = "selected";
} else if (select.name === "to" && currCode === "INR") {
  newOption.selected = "selected";
}
select.append(newOption);
}
select.addEventListener("change",(evt)=>{
    upgradeflag(evt.target);
});
  }


  function upgradeflag(element){
let currcode = element.value;
let countrycode=countryList[currcode];
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img =element.parentElement.querySelector("img");  
img.src=newsrc;
  }

  btn.addEventListener("click",async(evt)=>{
   evt.preventDefault();
   let amount = document.querySelector("form input");
   let amtval = amount.value;
   if(amtval===""|| amtval<1){
    amtval=1;
    amount.value="1";
   }

   const URL = `${BASE_URL}/${fromCurr.value}`;
   
   fetch(URL)
   .then(response => response.json())


   .then(data => {
    var abc=console.log(toCurr.value);
     const usdToInr = data.rates[toCurr.value];
     let finalamt= amtval*usdToInr;
     msg.innerText= `${amtval}  ${fromCurr.value} = ${finalamt}  ${toCurr.value}`;
   }); 

  


  
   /*let finalamt= amtval*usdToInr;
   msg.innerText= `${amtval}${fromCurr.value} = ${finalamt}  ${toCurr.value}`;*/

  });

  