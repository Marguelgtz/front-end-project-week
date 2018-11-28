import React from 'react';

const NoteCard = props => {
  return (
    <div className="main-container">
      <div className="header-container">
        <h3>{props.title}</h3>
      </div>
      {/* just show preview for now, implement SUMMRY api when mvp is done */}
      <div className="body-container">
        <p className="text-body">{props.textBody}</p>
      </div>
    </div>
  )
}

export default NoteCard;