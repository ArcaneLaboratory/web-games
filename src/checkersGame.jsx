import { useState } from 'react'

import './checkers.css'

function redOrBlack(value){
    return (((Math.floor((value-1)/8)) % 2 ? value : value+1) % 2? "red" : "black")
}

function Square({value, cls}){
    return <div className={"square " + redOrBlack(value) + " " + cls}>{value}</div>
}

function Column({rowvalue}){
    // let returnRow = <></>
    // returnRow += <div id={value}></div>
    // for(var i = 1; i<=8; i++){
    //     returnRow += Square(value*8 + i)
    // }
    // return returnRow;
    return <>

        <Square value={rowvalue*8 + 1} cls={"x"+rowvalue+" y1"}></Square>
        <Square value={rowvalue*8 + 2} cls={"x"+rowvalue+" y2"}></Square>
        <Square value={rowvalue*8 + 3} cls={"x"+rowvalue+" y3"}></Square>
        <Square value={rowvalue*8 + 4} cls={"x"+rowvalue+" y4"}></Square>
        <Square value={rowvalue*8 + 5} cls={"x"+rowvalue+" y5"}></Square>
        <Square value={rowvalue*8 + 6} cls={"x"+rowvalue+" y6"}></Square>
        <Square value={rowvalue*8 + 7} cls={"x"+rowvalue+" y7"}></Square>
        <Square value={rowvalue*8 + 8} cls={"x"+rowvalue+" y8"}></Square>

    </>
}

function Board(){
    return <>
        <div className={"board"}>
            <Column rowvalue={0}></Column>
            <Column rowvalue={1}></Column>
            <Column rowvalue={2}></Column>
            <Column rowvalue={3}></Column>
            <Column rowvalue={4}></Column>
            <Column rowvalue={5}></Column>
            <Column rowvalue={6}></Column>
            <Column rowvalue={7}></Column>

            <Checker color="red" Pos="x0 y8"></Checker>
            <Checker color="red" Pos="x2 y8"></Checker>
            <Checker color="red" Pos="x4 y8"></Checker>
            <Checker color="red" Pos="x6 y8"></Checker>
            <Checker color="red" Pos="x1 y7"></Checker>
            <Checker color="red" Pos="x3 y7"></Checker>
            <Checker color="red" Pos="x5 y7"></Checker>
            <Checker color="red" Pos="x7 y7"></Checker>
            <Checker color="red" Pos="x0 y6"></Checker>
            <Checker color="red" Pos="x2 y6"></Checker>
            <Checker color="red" Pos="x4 y6"></Checker>
            <Checker color="red" Pos="x6 y6"></Checker>

            <Checker color="black" Pos="x0 y2"></Checker>
            <Checker color="black" Pos="x2 y2"></Checker>
            <Checker color="black" Pos="x4 y2"></Checker>
            <Checker color="black" Pos="x6 y2"></Checker>
            <Checker color="black" Pos="x1 y1"></Checker>
            <Checker color="black" Pos="x3 y1"></Checker>
            <Checker color="black" Pos="x5 y1"></Checker>
            <Checker color="black" Pos="x7 y1"></Checker>
            <Checker color="black" Pos="x1 y3"></Checker>
            <Checker color="black" Pos="x3 y3"></Checker>
            <Checker color="black" Pos="x5 y3"></Checker>
            <Checker color="black" Pos="x7 y3"></Checker>
        </div>
    </>
}

function Checker({color, Pos}){
    return <button onClick={updateBoard} className={'checker ' + color + " " + Pos} > </button>
}

function updateBoard(e) {}

function CheckersGame(){
    return(
        <>
            <h1> Checkers </h1>
            <Board />
        </>
    )
}

export default CheckersGame