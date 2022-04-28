import Comment from './Components/Comment';
import './App.css';



const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://i.pinimg.com/474x/31/9e/54/319e545d47eb1c62a83bfa2a4053afa9.jpg'
  }
};

function App() {
  return (
    <div className="App">
      <Comment author={comment.author} text={comment.text} date={comment.date} />
     
    </div>
  );
}

export default App;
