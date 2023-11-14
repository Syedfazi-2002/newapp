import React from "react";
function Score(){
    var [scoreCard,setScoreCard]=React.useState(0);
    var [wickets,setWickets]=React.useState(0)
    var [totalWickets,setTotalWickets]=React.useState(10)

    function score1(){
        setScoreCard(scoreCard+1)
    }
    function score2(){
        setScoreCard(scoreCard+2)
    }
    function score3(){
        setScoreCard(scoreCard+3)
    }
    function score4(){
        setScoreCard(scoreCard+4)
    }
    function score6(){
        setScoreCard(scoreCard+6)
    }
    function wicket(){
        if(wickets<totalWickets){
            setWickets(wickets+1)
        }
        else{
            setTotalWickets(10)
        }
       
    }
    function wide(){
        setScoreCard(scoreCard+1)
    }
    function noball(){
        setScoreCard(scoreCard+1)
    }
 return (
    <div>
       <h1>{scoreCard}/{wickets}</h1>

       <div>
        <button>0</button>
        <button onClick = {score1}>1</button>
        <button onClick={score2}>2</button>
        <button onClick={score3}>3</button>
        <button onClick={score4}>4</button>
        <button onClick={score6}>6</button>
        <button onClick={wicket}>wicket</button>
        <button onClick={wide}>wide</button>
        <button onClick={noball}>noball</button>
       </div>
    </div>
 )
}
export default Score;