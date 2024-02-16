import React from 'react';

function TaskList(props) {
    return (
      <div>
        {props.map(item => (
          <ul key={item.task} />
        ))}
      </div>
    );
  }
  export default TaskList;