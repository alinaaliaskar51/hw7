
function CommentDate (props) {
    let month = props.date.toLocaleString('en-Us',{month:'long'});
    let day = props.date.toLocaleString('en-Us',{day:'2-digit'});
    let year = props.date.getFullYear()
    return (
        <div className='Comment-date'> 

          <div>{month}{year}{day}</div>
          
        </div>
    )
}

export default CommentDate