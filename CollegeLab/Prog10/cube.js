function Cube(){
    const findCube=()=> {
        const array=[];
        for(let i=1;i<100;i++){
            if(Math.pow(i,3)<100){
                array.push(i*i*i);
            }
            else{
                break;
            }
        }
        return array;
    };
    return (<div>
        Cubes less than 100 are <ul>{findCube().map((elem)=>{return(<li>{elem}</li>)})}</ul>
    </div>)
}
export default Cube;