const title=document.getElementById("header");
const para=document.getElementById("text");
const mybtn=document.getElementById("btn");

const fetchadvice= async() => {
    const res=await fetch("https://api.adviceslip.com/advice");
    const data= await res.json();


    console.log(data);
    title.innerHTML= `Advice #${data.slip.id}` ;
    para.innerHTML=`"${data.slip.advice}"`;
    
  
}
fetchadvice()


mybtn.addEventListener('click',fetchadvice)