import React from 'react';
import {Component} from 'react';
import './App.css';
class Final extends Component {
constructor(props){
super(props);
this.state={
btns:[
{name :"Budget ",
value:1 
},
{name :"Food allergies  ",
value:2
},
{name :"Number of people  ",
value:3
},
{name :"Special restrictions ",
value:4
}
],
copy:[],
removed:[],
disabled:true,
setKeyword:"",
keyword:"",
search:"",
};
}
toggle(index,item){
var btnToCheck=document.getElementById(`btn${index}`);
var iconToCheck=document.getElementById(`icon${index}`);
var iconToCheck1=document.getElementById(`icon1${index}`);
iconToCheck.style.display='none'
iconToCheck1.style.display='none'
if(!btnToCheck.disabled){
iconToCheck1.style.display='inline-block'
iconToCheck.style.display='none'
btnToCheck.disabled=true;
this.setState({
copy:this.state.copy.concat(this.state.btns[index].name),
})
}
else {
iconToCheck.style.display='inline-block'
iconToCheck1.style.display='none'
var itemName = item.name;
var itemIndex = this.state.copy.indexOf(itemName)
btnToCheck.disabled=false
this.setState({
removed:this.state.copy.splice(itemIndex,1)
})
}
}
setKeyword(e){
this.setState({
keyword:e
}) 
this.state.btns.map((item,i)=>{
var letter=item.name[0].toLowerCase();

var input =e;
if(letter==e){
this.setState({
search:this.state.btns[i].name
})
}
else {console.log("no-match")}
})
}
render(){
return(
<div class="out-container">
   <div class="inner_class" >
      <div class="input">
         <input 
         class="input"
         key="random1"
         value={this.state.keyword}
         placeholder={"search questions"}
         onChange={(e) =>this. setKeyword(e.target.value)}
         ></input>
      </div>
      {
      this.state.btns.map((item,i)=>
      <div class="in-inner"  onClick={()=>
         {this.toggle(i,item);
         }
         }  >
         <button  id={"btn"+i} class="btn" key={item.value} value={item.name}>
            <p> {item.name}</p>
            <svg class="icon"  xmlns="http://www.w3.org/2000/svg" id={"icon"+i} fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6v6m0 0v6m0-6h6m-6 0H1" />
            </svg>
            <svg class="icon" style={{display:'none'}} xmlns="http://www.w3.org/2000/svg" id={"icon1"+i} fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 10l2 5L15 7" />
            </svg>
         </button>
      </div>
      )
      }
   </div>
   <h3>Selected Items :</h3>
   <div class="second-div ">
      {this.state.copy.map((item3,i)=>
      <li value={item3}>{item3} {i}</li>
      )}
   </div>
   {"search : "+this.state.search}

</div>
);
}
}
export default Final;