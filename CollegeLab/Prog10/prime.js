function Prime(){
    function isPrime(n){
        for(let i=2;i<n;i++){
            if(n%i===0){
                return false;
            }
            return true;
        }
    }
    const findPrime=()=>{
        const array=[];
    for(let i=2;i<=100;i++){
        if(isPrime(i)){
            array.push(i);
        }
    }
    return array;
};
return (<div>
    Prime less than 100 are <ul>{findPrime().map((elem)=>{return(<li>{elem}</li>)})}</ul>
</div>)
}

export default Prime;