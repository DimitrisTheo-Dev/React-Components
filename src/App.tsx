import React from 'react'
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";
import ApprovalCard from './ApprovalCard';
let getTime = () => {
    return (new Date()).toLocaleTimeString()
}

 const App = () => {
  return (
      <div className="ui container comments">
          <ApprovalCard>
              <h4>Warning!</h4>
              Are you use you want to do this?
          </ApprovalCard>
          <ApprovalCard>
             <CommentDetail
            author="Dimitris"
            date={getTime()}
            text="Hello world"
            profile={faker.image.image()}
            />
          </ApprovalCard>
          <ApprovalCard>
              <CommentDetail
                author="George"
                date={getTime()}
                text="Hi there"
                profile={faker.image.image()}
            />
          </ApprovalCard>
      </div>
  );
}

ReactDOM.render(<App /> , document.querySelector('#root'));
export default App;