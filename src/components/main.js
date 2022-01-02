import { useState, useEffect } from "react";
import styled from "styled-components";

const Del = styled.p`
font-size: 2em;
color: aliceblue;
margin-top: 2em;
`

const Flex = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
flex-wrap: nowrap;
`

export default function Main() {
    let [motorcyclist, setMotorcyclist] = useState(2)
    let [isMotorcyclist, setisMotorcyclist] = useState(null)
    let [isMotorcyclist1, setisMotorcyclist1] = useState(null)
    let [isMotorcyclist2, setisMotorcyclist2] = useState(null)
    let [resultado, setResultado] = useState('00:00')
    let [resultado1, setResultado1] = useState('00:00')
    let [resultado2, setResultado2] = useState('00:00')
    let [background, setBackground] = useState('gray')
    let [background1, setBackground1] = useState('gray')
    let [background2, setBackground2] = useState('gray')
    let [button, setButton] = useState(false)
    let [button1, setButton1] = useState(false)
    let [button2, setButton2] = useState(false)


    const Div = styled.div`
background-color: ${background};
text-align: center;
padding: 2em;
margin: 1em;
width: 100px;
border-radius: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
box-shadow: 0 8px 16px 0 rgba(252, 252, 252, 0.2), 0 6px 20px 0 rgba(252, 252, 252, 0.19);

`
    const Div1 = styled.div`
background-color: ${background1};
text-align: center;
padding: 2em;
margin: 1em;
width: 100px;
border-radius: 10px;
display: flex;
flex-direction: column;
box-shadow: 0 8px 16px 0 rgba(252, 252, 252, 0.2), 0 6px 20px 0 rgba(252, 252, 252, 0.19);
`
    const Div2 = styled.div`
background-color: ${background2};
text-align: center;
padding: 2em;
margin: 1em;
width: 100px;
border-radius: 10px;
display: flex;
flex-direction: column;
box-shadow: 0 8px 16px 0 rgba(252, 252, 252, 0.2), 0 6px 20px 0 rgba(252, 252, 252, 0.19);
`

    const Btn = styled.button`
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
background: none;
border: none;
font-size: 1rem;
margin-top: 10px;
padding: 2vh;
border: 1px solid black;
border-radius: 10px;
&:hover{
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
}

`

    useEffect(() => {
        if (isMotorcyclist) {
            setBackground('green')
        }
    }, [isMotorcyclist])

    useEffect(() => {
        if (isMotorcyclist1) {
            setBackground1('green')
        }
    }, [isMotorcyclist1])

    useEffect(() => {
        if (isMotorcyclist2) {
            setBackground2('green')
        }

    }, [isMotorcyclist2])

    useEffect(() => {
        if (motorcyclist > 0 && (isMotorcyclist == false || isMotorcyclist == null)) {
            setBackground('gray')
            setButton(false)
        }
        if (motorcyclist > 0 && (isMotorcyclist1 == false || isMotorcyclist1 == null)) {
            setBackground1('gray')
            setButton1(false)
        }
        if (motorcyclist > 0 && (isMotorcyclist2 == false || isMotorcyclist2 == null)) {
            setBackground2('gray')
            setButton2(false)
        }

        if (motorcyclist == 0 && (isMotorcyclist == false || isMotorcyclist == null)) {
            setBackground('red')
            setButton(true)
        }
        if (motorcyclist == 0 && (isMotorcyclist1 == false || isMotorcyclist1 == null)) {
            setBackground1('red')
            setButton1(true)
        }
        if (motorcyclist == 0 && (isMotorcyclist2 == false || isMotorcyclist2 == null)) {
            setBackground2('red')
            setButton2(true)
        }


        if (motorcyclist == 0) {
            setButton(true)
            setButton1(true)
            setButton2(true)
        }
        if (motorcyclist > 2) {
            setMotorcyclist(2)
        }

        if (motorcyclist < 0) {
            setMotorcyclist(2)
        }


    }, [motorcyclist])


    const getTime = async function (setRes, setIs) {
        const fechaFuturo = new Date().setMinutes(new Date().getMinutes() + 1)

        const idInterval = setInterval(() => {
            let tiempoRestante = fechaFuturo - new Date()
            let segundos = tiempoRestante / 1000
            tiempoRestante -= parseInt(tiempoRestante / 1000) * 60 * 1000;
            
            setRes(`00:${segundos.toFixed(0) < 10 ? '0' : ''}${segundos.toFixed(0)}`)

            if (tiempoRestante > 0) {

                if (motorcyclist == 1) {
                    setMotorcyclist(2)
                } else {
                    setMotorcyclist(1)
                }

                setIs(null)
                setRes('00:00')

                setTimeout(() => {
                    clearInterval(idInterval)
                }, 1000);


            }
        }, 1000)


    }
    const handleClick = async function (setRes, setIs, setBtn) {
        setMotorcyclist(motorcyclist - 1)
        getTime(setRes, setIs)
        setBtn(true)
        setIs(true)

    }

    return (
        <>
            <Flex>
                <Del>&#128757; Disponibles: {motorcyclist}</Del>
                <Div>
                    {isMotorcyclist ? <p>  &#128757; {resultado}</p> : null}
                    <Btn disabled={button} onClick={() => handleClick(setResultado, setisMotorcyclist, setButton)}> &#128343;  8:00</Btn>
                </Div>
                <Div1>
                    {isMotorcyclist1 ? <p>  &#128757; {resultado1}</p> : null}
                    <Btn disabled={button1} onClick={() => handleClick(setResultado1, setisMotorcyclist1, setButton1)}> &#128343;  8:30</Btn>
                </Div1>
                <Div2>
                    {isMotorcyclist2 ? <p>  &#128757; {resultado2}</p> : null}
                    <Btn disabled={button2} onClick={() => handleClick(setResultado2, setisMotorcyclist2, setButton2)}> &#128343;  9:00</Btn>
                </Div2>
            </Flex>
        </>
    )
}