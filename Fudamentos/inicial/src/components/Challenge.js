const Challenge = () => {
    let valor1 = 1;
    let valor2 = 5;
  return (
    <div>
        <p>{valor1}</p>
        <p>{valor2}</p>
        <button onClick={()=>{console.log(valor1 + valor2)}}>somar</button>
    </div>
  )
}

export default Challenge
