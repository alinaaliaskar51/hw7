import './Card.css'

function Card (props) {
    let classes = 'wrapper ' +  props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card