import './App.css';
import { useEffect, useState } from 'react';

function App(){
  const [data,setData]=useState(null);

  async function fetchData(){
    const response=await fetch("https://dummyjson.com/products");
    const apiData=await response.json();
    setData(apiData.products);
  }

  useEffect(()=>{
    fetchData();

  },[]);

  return (
    <>
    {data &&(
      <table border="1 px solid">
        <tbody>
          {data.map((item,index)=>(
            <tr key={index}>
              {Object.entries(item).map(([index,value])=>(
                <td key={index}>
                  {JSON.stringify(value)}
                </td>
          ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </>
  );
}

export default App;
