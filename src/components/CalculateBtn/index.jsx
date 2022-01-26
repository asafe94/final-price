import {useState} from "react";

export const CalculateBtn = () => {
  const [inputValue, setInputValue] = useState("")

  const FinalPrice = (cost, business) => {
    cost = Number(cost)

    const markup = {
      CMRod: 2.5,
      HVNRod: 2.5,
      HVNBon: 2.3,
      RPRod: 2.3
    }

    //const HVN = () => {
    //  return(
    //    <>
    //      <p>Preço de custo: R${cost}</p>
    //      <p>Preço de venda Rodoviária: R${cost * markup.HVNRod}</p>
    //      <p>Preço de venda Bonsucesso: R${cost * markup.HVNBon}</p>
    //    </>
    //  )
    //}

    //const CM = () => {
    //  return(
    //    <>
    //      <p>Preço de custo: R${cost}</p>
    //      <p>Preço de venda Rodoviária: R${cost * markup.CMRod}</p>
    //    </>
    //  )
    //}
    
    //const RP = () => {
    //  return(
    //   <>
    //      <p>Preço de custo: R${cost}</p>
    //      <p>Preço de venda Rodoviária: R${cost * markup.RPRod}</p>
    //    </>
    //  )
    // }

    //const ENUMOBJECT = {
    //  a: 'HVN',
    //  b: 'CM',
    //  c: 'RP',
    //};

    
      if (business === 'HVN')
      {
        r
      } else if (business === 'CM')
      {
        return (
          <>
            <p>Preço de custo: R${cost}</p>
            <p>Preço de venda Rodoviária: R${cost * markup.CMRod}</p>
          </>
        )
      } else if (business === 'RP')
      {
        return (
          <>
            <p>Preço de custo: R${cost}</p>
            <p>Preço de venda Rodoviária: R${cost * markup.RPRod}</p>
          </>
        )
      } else {
        alert("Error")
      }

    
  }
  
  const CheckValue = (num) => {

    if (num == 0) 
    {
    return alert('Erro: o valor de custo não pode ser igual a 0.');
    } else if (isNaN(num)) 
    {
    return alert('Erro: o valor precisa ser um número');
    } else
    {
    FinalPrice(num, 'HVN')
    console.log(num)
    }
  }

  return (
    <>
      <input placeholder="Custo" onChange={(e) => setInputValue(e.target.value)}/>
    <>    
    </>
      <button value="Calcular" onClick={() => CheckValue(inputValue)}>Calcular</button> 
    </>
  )
};