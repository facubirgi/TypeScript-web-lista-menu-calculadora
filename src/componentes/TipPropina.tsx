import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPropinaProps ={
    setTip:Dispatch<SetStateAction<number>>,
    tip: number
  }


export default function TipPropina({setTip, tip} : TipPropinaProps) {
  return (
    <div>
        <h3 className=" font-black text-2xl">Propina: </h3>
        <form>
            {tipOptions.map(tipOpcion =>(
            <div key={tipOpcion.id} className=" flex gap-2">
                <label htmlFor={tipOpcion.id}>{tipOpcion.label}</label>
                <input 
                    id={tipOpcion.id}
                    type="radio"
                    name="tip"
                    value={tipOpcion.value}
                    onChange={e => setTip(+e.target.value)}
                    checked = {tipOpcion.value === tip}
                />
            </div>
            ))}
        </form>
    </div>
  )
}
