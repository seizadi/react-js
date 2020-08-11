import React from 'react';
import './App.css';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div>
        <div className={'ui cards'}>
          <ApprovalCard >
            <CommentDetail
              image={ faker.image.avatar() }
              author={faker.name.firstName()}
              timeStamp={faker.date.past(1)}
              post={faker.lorem.paragraph(3)}
            />
          </ApprovalCard>
          <ApprovalCard >
            <CommentDetail
              image={ faker.image.avatar() }
              author={faker.name.firstName()}
              timeStamp={faker.date.past(1)}
              post={faker.lorem.paragraph(3)}
            />
          </ApprovalCard>
          <ApprovalCard >
            <CommentDetail
              image={ faker.image.avatar() }
              author={faker.name.firstName()}
              timeStamp={faker.date.past(1)}
              post={faker.lorem.paragraph(3)}
            />
          </ApprovalCard>
        </div>
    </div>
  );
}

export default App;
