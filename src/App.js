import React from 'react';
import './App.css';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div className="App">
        <div className={'ui container comments'}>

            <ApprovalCard content=<CommentDetail
                          image={ faker.image.avatar() }
                          author={faker.name.firstName()}
                          timeStamp={faker.date.past(1)}
                          post={faker.lorem.paragraph(3)}
            /> />
            <CommentDetail
                image={ faker.image.avatar() }
                author={faker.name.firstName()}
                timeStamp={faker.date.past(1)}
                post={faker.lorem.paragraph(3)}
            />
            <CommentDetail
                image={ faker.image.avatar() }
                author={faker.name.firstName()}
                timeStamp={faker.date.past(1)}
                post={faker.lorem.paragraph(3)}
            />
        </div>
    </div>
  );
}

export default App;
