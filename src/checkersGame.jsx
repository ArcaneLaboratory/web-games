import { useState } from "react";

import "./checkers.css";

let whoseFreakingTurnIsIt = "black";
let freakingCheckerSelected = null;

function redOrBlack(value) {
    return (Math.floor((value - 1) / 8) % 2 ? value : value + 1) % 2
        ? "red"
        : "black";
}

function Square({ value, cls }) {
    return (
        <div className={"square " + redOrBlack(value) + " " + cls}></div>
    );
}

function Column({ rowvalue }) {
    // let returnRow = <></>
    // returnRow += <div id={value}></div>
    // for(var i = 1; i<=8; i++){
    //     returnRow += Square(value*8 + i)
    // }
    // return returnRow;
    return (
        <>
            <Square value={rowvalue * 8 + 1} cls={"x" + rowvalue + " y1"}></Square>
            <Square value={rowvalue * 8 + 2} cls={"x" + rowvalue + " y2"}></Square>
            <Square value={rowvalue * 8 + 3} cls={"x" + rowvalue + " y3"}></Square>
            <Square value={rowvalue * 8 + 4} cls={"x" + rowvalue + " y4"}></Square>
            <Square value={rowvalue * 8 + 5} cls={"x" + rowvalue + " y5"}></Square>
            <Square value={rowvalue * 8 + 6} cls={"x" + rowvalue + " y6"}></Square>
            <Square value={rowvalue * 8 + 7} cls={"x" + rowvalue + " y7"}></Square>
            <Square value={rowvalue * 8 + 8} cls={"x" + rowvalue + " y8"}></Square>
        </>
    );
}
let redCheckers = [
    "x0 y8 r",
    "x2 y8 r",
    "x4 y8 r",
    "x6 y8 r",
    "x1 y7 r",
    "x3 y7 r",
    "x5 y7 r",
    "x7 y7 r",
    "x0 y6 r",
    "x2 y6 r",
    "x4 y6 r",
    "x6 y6 r",
];
let blackCheckers = [
    "x0 y2 r",
    "x2 y2 r",
    "x4 y2 r",
    "x6 y2 r",
    "x1 y1 r",
    "x3 y1 r",
    "x5 y1 r",
    "x7 y1 r",
    "x1 y3 r",
    "x3 y3 r",
    "x5 y3 r",
    "x7 y3 r",
];
let validMoves = ["x9", "x9", "x9", "x9"];
function Board() {
    //   console.log(validMoves)
    const [key, setKey] = useState(0);
    const handleRefresh = () => {
        setKey(key + 1);
    };
    function blackCapture(selectedChecker) {
        let captures = redCheckers.filter((f) => {
            if (f[1] == selectedChecker[1] && f[4] == selectedChecker[4]) {
                return true;
            } else {
                return false;
            }
        })
        console.log(captures);
        if (captures.length == 1) {
            return true;
        } else { return false; }
    }
    function redCapture(selectedChecker) {
        let captures = blackCheckers.filter((f) => {
            if (f[1] == selectedChecker[1] && f[4] == selectedChecker[4]) {
                return true;
            } else {
                return false;
            }
        })
        if (captures.length == 1) {
            return true;
        } else { return false; }
    }
    function handleClick(cc, i) {
        if (!freakingCheckerSelected) {
            freakingCheckerSelected = [cc, i]
            if (cc == whoseFreakingTurnIsIt) {
                if (cc == "red") {
                    validMoves[0] =
                        "x" +
                        String(Number(redCheckers[i][1]) - 1) +
                        " y" +
                        String(Number(redCheckers[i][4]) - 1)
                        ;
                    if (redCapture(validMoves[0])) {
                        validMoves[0] =
                            "x" +
                            String(Number(redCheckers[i][1]) - 2) +
                            " y" +
                            String(Number(redCheckers[i][4]) - 2)
                            ;
                        if (blackCapture(validMoves[0]) || redCapture(validMoves[0])) {
                            validMoves[0] = "x9"
                        }
                    }
                    else if (blackCapture(validMoves[0])) {
                        validMoves[0] = "x9"
                    }
                    validMoves[1] =
                        "x" +
                        String(Number(redCheckers[i][1]) + 1) +
                        " y" +
                        String(Number(redCheckers[i][4]) - 1)
                        ;
                    if (redCapture(validMoves[1])) {
                        validMoves[1] =
                            "x" +
                            String(Number(redCheckers[i][1]) + 2) +
                            " y" +
                            String(Number(redCheckers[i][4]) - 2)
                            ;
                        if (blackCapture(validMoves[1]) || redCapture(validMoves[1])) {
                            validMoves[1] = "x9"
                        }
                    }
                    else if (blackCapture(validMoves[1])) {
                        validMoves[1] = "x9"
                    }
                    if (redCheckers[i][6] == "k") {
                        validMoves[2] =
                            "x" +
                            String(Number(redCheckers[i][1]) - 1) +
                            " y" +
                            String(Number(redCheckers[i][4]) + 1)
                            ;
                        if (redCapture(validMoves[2])) {
                            validMoves[2] =
                                "x" +
                                String(Number(redCheckers[i][1]) - 2) +
                                " y" +
                                String(Number(redCheckers[i][4]) + 2)
                                ;
                            if (blackCapture(validMoves[2]) || redCapture(validMoves[2])) {
                                validMoves[2] = "x9"
                            }
                        }
                        else if (blackCapture(validMoves[2])) {
                            validMoves[2] = "x9"
                        }
                        validMoves[3] =
                            "x" +
                            String(Number(redCheckers[i][1]) + 1) +
                            " y" +
                            String(Number(redCheckers[i][4]) + 1)
                            ;
                        if (redCapture(validMoves[3])) {
                            validMoves[3] =
                                "x" +
                                String(Number(redCheckers[i][1]) + 2) +
                                " y" +
                                String(Number(redCheckers[i][4]) + 2)
                                ;
                            if (blackCapture(validMoves[3]) || redCapture(validMoves[3])) {
                                validMoves[3] = "x9"
                            }
                        }
                        else if (blackCapture(validMoves[3])) {
                            validMoves[3] = "x9"
                        }
                    }
                }
                if (cc == "black") {
                    validMoves[0] =
                        "x" +
                        String(Number(blackCheckers[i][1]) - 1) +
                        " y" +
                        String(Number(blackCheckers[i][4]) + 1)
                        ;
                    if (blackCapture(validMoves[0])) {
                        validMoves[0] =
                            "x" +
                            String(Number(blackCheckers[i][1]) - 2) +
                            " y" +
                            String(Number(blackCheckers[i][4]) + 2)
                            ;
                        if (blackCapture(validMoves[0]) || redCapture(validMoves[0])) {
                            validMoves[0] = "x9"
                        }
                    }
                    else if (redCapture(validMoves[0])) {
                        validMoves[0] = "x9"
                    }
                    validMoves[1] =
                        "x" +
                        String(Number(blackCheckers[i][1]) + 1) +
                        " y" +
                        String(Number(blackCheckers[i][4]) + 1)
                        ;
                    if (blackCapture(validMoves[1])) {
                        validMoves[1] =
                            "x" +
                            String(Number(blackCheckers[i][1]) + 2) +
                            " y" +
                            String(Number(blackCheckers[i][4]) + 2)
                            ;
                        if (blackCapture(validMoves[1]) || redCapture(validMoves[1])) {
                            validMoves[1] = "x9"
                        }
                    }
                    else if (redCapture(validMoves[1])) {
                        validMoves[1] = "x9"
                    }
                    if (blackCheckers[i][6] == "k") {
                        validMoves[2] =
                            "x" +
                            String(Number(blackCheckers[i][1]) - 1) +
                            " y" +
                            String(Number(blackCheckers[i][4]) - 1)
                            ;
                        if (blackCapture(validMoves[2])) {
                            validMoves[2] =
                                "x" +
                                String(Number(blackCheckers[i][1]) - 2) +
                                " y" +
                                String(Number(blackCheckers[i][4]) - 2)
                                ;
                            if (blackCapture(validMoves[2]) || redCapture(validMoves[2])) {
                                validMoves[2] = "x9"
                            }
                        }
                        else if (redCapture(validMoves[2])) {
                            validMoves[2] = "x9"
                        }
                        validMoves[3] =
                            "x" +
                            String(Number(blackCheckers[i][1]) + 1) +
                            " y" +
                            String(Number(blackCheckers[i][4]) - 1)
                            ;
                        if (blackCapture(validMoves[3])) {
                            validMoves[3] =
                                "x" +
                                String(Number(blackCheckers[i][1]) + 2) +
                                " y" +
                                String(Number(blackCheckers[i][4]) - 2)
                                ;
                            if (blackCapture(validMoves[3]) || redCapture(validMoves[3])) {
                                validMoves[3] = "x9"
                            }
                        }
                        else if (redCapture(validMoves[3])) {
                            validMoves[3] = "x9"
                        }
                    }
                }
            }
            if (validMoves.filter((move) => ((move[1] >= 0) && (move[1] < 8) && (move[4] > 0) && (move[4] <= 8))).length == 0) {
                freakingCheckerSelected = null;
                validMoves = ["x9", "x9", "x9", "x9"];
            }
            // console.log(cc);
            // console.log(i);
            // console.log(validMoves);
        } else if (freakingCheckerSelected) {
            console.log(freakingCheckerSelected);
            if (cc == "empty") {
                if (freakingCheckerSelected[0] == "red") {
                    let isKing = redCheckers[freakingCheckerSelected[1]][6] == "k"
                    if (Math.abs(Number(validMoves[i][4]) - Number(redCheckers[freakingCheckerSelected[1]][4])) == 2) { // trying to capture
                        blackCheckers[blackCheckers.findIndex((e) => {
                            if (Math.floor((Number(validMoves[i][4]) + Number(redCheckers[freakingCheckerSelected[1]][4])) / 2) == e[4] &&
                                Math.floor((Number(validMoves[i][1]) + Number(redCheckers[freakingCheckerSelected[1]][1])) / 2) == e[1]) {
                                return true;
                                // found captured checker
                            }
                            return false;
                        })] = "x9" // remove captured checker
                    }
                    redCheckers[freakingCheckerSelected[1]] = validMoves[i] + " ";
                    redCheckers[freakingCheckerSelected[1]] += ((redCheckers[freakingCheckerSelected[1]][4] == "1") || isKing ? "k" : "r") // move the checker and check for promotion
                }

                if (freakingCheckerSelected[0] == "black") {
                    let isKing = blackCheckers[freakingCheckerSelected[1]][6] == "k"
                    if (Math.abs(Number(validMoves[i][4]) - Number(blackCheckers[freakingCheckerSelected[1]][4])) == 2) { // trying to capture
                        redCheckers[redCheckers.findIndex((e) => {
                            if (Math.floor((Number(validMoves[i][4]) + Number(blackCheckers[freakingCheckerSelected[1]][4])) / 2) == e[4] &&
                                Math.floor((Number(validMoves[i][1]) + Number(blackCheckers[freakingCheckerSelected[1]][1])) / 2) == e[1]) {
                                return true;
                                // found captured checker
                            }
                            return false;
                        })] = "x9" // remove captured checker
                    }
                    blackCheckers[freakingCheckerSelected[1]] = validMoves[i] + " ";
                    blackCheckers[freakingCheckerSelected[1]] += ((blackCheckers[freakingCheckerSelected[1]][4] == "8") || isKing ? "k" : "r") // move the checker and check for promotion
                }
                whoseFreakingTurnIsIt = (whoseFreakingTurnIsIt == "black") ? "red" : "black"
            }
            validMoves = ["x9", "x9", "x9", "x9"];
            freakingCheckerSelected = null;
        }
        handleRefresh();
    }

    return (
        <>
            <h2>It is {whoseFreakingTurnIsIt}'s turn</h2>
            <div className={"board"}>
                <Column rowvalue={0}></Column>
                <Column rowvalue={1}></Column>
                <Column rowvalue={2}></Column>
                <Column rowvalue={3}></Column>
                <Column rowvalue={4}></Column>
                <Column rowvalue={5}></Column>
                <Column rowvalue={6}></Column>
                <Column rowvalue={7}></Column>

                <Checker
                    color="empty"
                    Pos={validMoves[0]}
                    checkerClick={() => handleClick("empty", 0)}
                ></Checker>
                <Checker
                    color="empty"
                    Pos={validMoves[1]}
                    checkerClick={() => handleClick("empty", 1)}
                ></Checker>
                <Checker
                    color="empty"
                    Pos={validMoves[2]}
                    checkerClick={() => handleClick("empty", 2)}
                ></Checker>
                <Checker
                    color="empty"
                    Pos={validMoves[3]}
                    checkerClick={() => handleClick("empty", 3)}
                ></Checker>

                <Checker
                    color="red"
                    Pos={redCheckers[0]}
                    checkerClick={() => handleClick("red", 0)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[1]}
                    checkerClick={() => handleClick("red", 1)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[2]}
                    checkerClick={() => handleClick("red", 2)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[3]}
                    checkerClick={() => handleClick("red", 3)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[4]}
                    checkerClick={() => handleClick("red", 4)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[5]}
                    checkerClick={() => handleClick("red", 5)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[6]}
                    checkerClick={() => handleClick("red", 6)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[7]}
                    checkerClick={() => handleClick("red", 7)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[8]}
                    checkerClick={() => handleClick("red", 8)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[9]}
                    checkerClick={() => handleClick("red", 9)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[10]}
                    checkerClick={() => handleClick("red", 10)}
                ></Checker>
                <Checker
                    color="red"
                    Pos={redCheckers[11]}
                    checkerClick={() => handleClick("red", 11)}
                ></Checker>

                <Checker
                    color="black"
                    Pos={blackCheckers[0]}
                    checkerClick={() => handleClick("black", 0)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[1]}
                    checkerClick={() => handleClick("black", 1)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[2]}
                    checkerClick={() => handleClick("black", 2)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[3]}
                    checkerClick={() => handleClick("black", 3)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[4]}
                    checkerClick={() => handleClick("black", 4)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[5]}
                    checkerClick={() => handleClick("black", 5)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[6]}
                    checkerClick={() => handleClick("black", 6)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[7]}
                    checkerClick={() => handleClick("black", 7)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[8]}
                    checkerClick={() => handleClick("black", 8)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[9]}
                    checkerClick={() => handleClick("black", 9)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[10]}
                    checkerClick={() => handleClick("black", 10)}
                ></Checker>
                <Checker
                    color="black"
                    Pos={blackCheckers[11]}
                    checkerClick={() => handleClick("black", 11)}
                ></Checker>
            </div>
        </>
    );
}

function Checker({ color, Pos, checkerClick }) {
    return (
        <button onClick={checkerClick} className={"checker " + color + " " + Pos}>
            {" "}
        </button>
    );
}

function CheckersGame() {
    return (
        <>
            <h1> Checkers </h1>
            <Board

            />
        </>
    );
}

export default CheckersGame;
