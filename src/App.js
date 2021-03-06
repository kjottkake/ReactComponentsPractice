// var faker = require('faker');
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
let pic = faker.image.avatar();

console.log(pic);

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={pic} alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">Deeznuts</a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">
            Get gud son.
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">{faker.name.firstName()}</a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">
            Get gud son.
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.cats()} alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">{faker.name.lastName()}</a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">
            Get gud son.
          </div>
        </div>
      </div>

      <ApprovalCard>
        <CommentDetail 
          author = "leet360" 
          timeAgo="Today at 4:45PM" 
          comment="lol" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author = "surfking" 
          timeAgo="Today at 2:00PM" 
          comment="that's pretty good actually" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail 
        author = "big_machine2" 
        timeAgo="Today at 2:20PM" 
        comment="lmao." 
        image={faker.image.avatar()}
      />
      <CommentDetail 
        author = "big_birb" 
        timeAgo="Today at 2:20PM" 
        comment="I love the music." 
        image={faker.image.avatar()}
      />
      <CommentDetail 
        author = "big_birb" 
        timeAgo="Today at 2:20PM" 
        comment="I love the words." 
        image={faker.image.avatar()}
      />
      <ApprovalCard>
        Are you sure you wish to continue?
      </ApprovalCard>
    </div>
  );
}

export default App;
