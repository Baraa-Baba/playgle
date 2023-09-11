import React from 'react'

const ChooseGame = ({userGame,setUserGame}) => {

    

    return (
        <>
        <select value={userGame} class='selectGender' onInput={(e)=>setUserGame(e.target.value)}>
            <option selected  value="no-game">choose game</option>
            <option value="no-game">no game</option>
            <option value="chess">chess</option>
            <option value="ticTak">ticTak</option>
            <option value="superTicTak">superTicTak</option>
        </select>
        </>
    );

}
export default ChooseGame
