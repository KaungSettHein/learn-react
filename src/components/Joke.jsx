function joke(prop) {
    return(
        <div>
            <p style={{display: !prop.quest && "none",color: "green"}}>Question {prop.quest}?</p>
            <p style={{color: !prop.quest && "blue"}}>Answer {prop.ans}</p><hr/>
        </div>
    )
}
export default joke;