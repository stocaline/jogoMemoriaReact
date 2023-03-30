import CardElement from "./CardElements"

export default function GameBoard(props) {
    return (
        <div id="gameBoard">
            {props.cards.map((card, i) => (
                <CardElement handleFlip={props.handleFlip} key={i} card={card} />
            ))}

        </div>
    )
}