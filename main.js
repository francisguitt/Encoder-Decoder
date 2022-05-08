
const c =(el)=>document
.querySelector(el)

let Btn_1= c("#btn_1");
let Btn_2=c("#btn_2");

const Input =c('#input_value');

Input.addEventListener('input',
(e)=>{
  let Event = e.target.value;
  const result = [];
   result.push(Event)
   
 //const result = [... Event];
  
const amount = result.map((item)=>{

Btn_1.addEventListener('click',()=>{
     showDataEncode(item)
  if(Btn_1){
c(".text_area").style.display="flex"
 c('.Footer').style.display="flex";
  }});

Btn_2.addEventListener('click',()=>{
      showDataDecode(item) 
      if(Btn_2){
 c(".text_area").style.displa="flex"
  c('.Footer').style.displa="flex";
      }});
  })});
   
function showDataEncode(x){
  const BT_OA = btoa(x)
  c('.text_area').innerHTML=`${BT_OA}`
   clearScreen()}
   
function showDataDecode(y){
  const AT_OB = atob(y)
  c('.text_area').innerHTML=`${AT_OB}`
    clearScreen()
  }
  
function clearScreen(){
  Input.innerHTML=''}
  
  
  

if(Input
.addEventListener('click',()=>{
  c('.Footer').style.display="none"
})){
}else{
  c('.Footer').style.display="flex"
}