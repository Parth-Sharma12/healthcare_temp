import React, { useState } from 'react';
import "../CSS/Comments.css";

export const Comments = () => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([
        { username: 'user1', comment: 'This is the first comment', time: '2024-04-04 10:00 AM' },
        { username: 'user2', comment: 'This is the second comment', time: '2024-04-04 10:30 AM' },
        { username: 'user3', comment: 'This is the third comment', time: '2024-04-04 11:00 AM' },
        { username: 'user1', comment: 'This is the first comment', time: '2024-04-04 10:00 AM' },
        { username: 'user2', comment: 'This is the second comment', time: '2024-04-04 10:30 AM' },

    ]);

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = () => {
        if (newComment.trim() !== '') {
            const currentTime = new Date().toLocaleString();
            const newCommentObj = {
                username: 'New User',
                comment: newComment,
                time: currentTime
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    };

    if (comments.length === 0) {
        return <div className="comments">No Comments to Display</div>;
    }

    return (
        <div className="comments">
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <p><strong>{comment.username}</strong> <br></br> {comment.comment}</p>
                    <p>{comment.time}</p>
                </div>
            ))}
            <div className="comment-input">
                <input type="text" value={newComment} onChange={handleInputChange} placeholder="Add a comment..." />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};
