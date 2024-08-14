import { useState } from 'react';

function App(){
  const ilist=['apple','cat','dog','mango','house'];
  const [list,updateList]=useState(ilist);
  const  filterList=(event)=>{
    const filtered=[];
    if(event.target.value){
      for(let i=0;i<ilist.length;i++){
        if(ilist[i].includes(event.target.value)){
          filtered.push(ilist[i]);
        }
      }
        updateList(filtered);
    }
        else{
            updateList(ilist);
        }
      };
      return (
        <div className="App">

        <label>Search: </label>
        <input type='text' onChange={(e)=>filterList(e)}/>
        {(list) ? <ul>
          {list.map((element,key)=>{
            return(<li key={key}>{element}</li>)})}
        </ul>:<></>}
        </div>
      );
    }
    export default App;