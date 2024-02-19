const ShowResult = ({ userChoice, computerchoice,result }) => {


    // if (userChoice === "rock" && computerchoice === "paper") {
    //     return (<div>computer is win</div>)
    // }
    // else if (userChoice === "rock" && computerchoice === "scissors") {
    //     return (<div>you are win</div>)
    // }
    // else if (userChoice === "rock" && computerchoice === "rock") {
    //     return (<div>drop</div>)

    // } else if (userChoice === "scissors" && computerchoice === "rock") {
    //     return (<div>you are win</div>)

    // } else if (userChoice === "scissors" && computerchoice === "paper") {
    //     return (<div>you are win</div>)

    // } else if (userChoice === "scissors" && computerchoice === "scissors") {
    //     return (<div>drop</div>)

    // } else if (userChoice === "paper" && computerchoice === "rock") {
    //     return (<div>you are win</div>)

    // } else if (userChoice === "paper" && computerchoice === "scissors") {
    //     return (<div>you are win</div>)
    // }
    // else if (userChoice === "paper" && computerchoice === "paper") {
    //     return (<div>drop</div>)
    // }
    // else {
    //     return (<div>computer is win</div>)
    // }
    if (userChoice === "rock" && computerchoice === "scissors" ||
        userChoice === "scissors" && computerchoice === "paper" ||
        userChoice === "paper" && computerchoice === "rock") {
        return (<div className="result">you are win</div>)
    }
    else if (computerchoice === "rock" && userChoice === "scissors" ||
    computerchoice === "scissors" && userChoice === "paper" ||
    computerchoice === "paper" && userChoice === "rock") {
    return (<div className="result">computer is win</div>)
}else{
    return(<div className= {result}>drop</div>)
}
}
export default ShowResult