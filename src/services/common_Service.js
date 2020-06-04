import React from 'react'
export const commonService={
    arrowCheck,
}

function arrowCheck(scoreA,scoreB, classes){
    if(scoreA>scoreB){
        return <div className={classes.arrowDown}>▼</div>;
    };
    return <div className={classes.arrowUp}>▲</div>;
}
