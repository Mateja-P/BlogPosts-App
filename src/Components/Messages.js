import React, { useState } from 'react';
import '../Styles/Messages.css';
import CloseIcon from '@mui/icons-material/Close';

function Messages() {
  const [visibleTab, setVisibleTab] = useState(true);
  const allMessages = [];

  return (
    <div className='messages-div__wrapper'>
      <h2>Welcome to My Blog</h2>
      <div className={visibleTab ? 'showing-messages__div' : 'closed-tab'}>
        {allMessages.length > 0 ? (
          <p>Unread messages {allMessages.length}</p>
        ) : (
          <p>Container for showing application messages</p>
        )}
        <CloseIcon
          className='close-tab'
          onClick={() => {
            setVisibleTab(false);
          }}
        />
      </div>
    </div>
  );
}

export default Messages;
