import React, {Component} from 'react';
import classes from './HomePageScores.css'
import ReactTooltip from 'react-tooltip';

class HomePageScores extends Component {

    render() {
        return (
            <div className={classes.mainWrapper}>
                <div className={classes.homePageScores}>
                    <div style={{display:"flex" ,width:"100%"}}>
                    <ReactTooltip />
                        {data.map((data, i) => {
                            return (
                            <div 
                                key={i}
                                className={classes.scoreBox}
                                data-background-color="#062e69" 
                                data-text-color="#fff" 
                                data-tip={data.description}
                                data-place="bottom"
                                data-effect="solid">
                                <div className={classes.scoreWrapper}>
                                    <div className={data.arrow?classes.arrowUp:classes.arrowDown}>
                                        {data.arrow?"▲":"▼"}
                                    </div>
                                    <div className={classes.scorePercent}>
                                        {data.score}%
                                    </div>
                                </div>
                                <div className={classes.techName}>
                                    {data.name}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const data = [
    {
        name: "Overall Risk",
        description: "Overall Risk",
        score: 28.3,
        arrow: true
    },
    {
        name: "Compliance",
        description: "Compliance",
        score: 74.7,
        arrow: true
    },
    {
        name: "Phishing Risk",
        description: "Phishing Risk",
        score: 17.5,
        arrow: false
    },
    {
        name: "Incident Closure",
        description: "Incident Closure",
        score: 81.2,
        arrow: true
    },
    {
        name: "Configuration Risk",
        description: "Configuration Risk",
        score: 11.8,
        arrow: false
    },
    // {
    //     name: "Random Data 11",
    //     description: "Random Data 11",
    //     score: 56,
    //     arrow: false
    // },
    // {
    //     name: "Random Data 22",
    //     description: "Random Data 22",
    //     score: 56,
    //     arrow: false
    // },
    // {
    //     name: "Random Data 33",
    //     description: "Random Data 33",
    //     score: 56,
    //     arrow: false
    // },
]

export default HomePageScores