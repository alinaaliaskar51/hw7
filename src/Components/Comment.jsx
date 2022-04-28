import Card from "../UI/Card"
import CommentDate from "./CommentDate"
import UserInfo from "./UserInfo"
import './Comment.css'



function Comment (props) {
    
    return (
        
     <div className='Comment'>
        <UserInfo author={props.author}/>
        <Card  className="Comment-text">
                 {props.text}  
                <CommentDate date={props.date}/>
        </Card>
          
     </div>
        
     

    )
}

export default Comment