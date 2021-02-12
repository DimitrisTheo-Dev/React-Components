import React from 'react';

interface Props {
    author: string;
    date: string;
    profile: any;
    text: string;
}
const CommentDetail: React.FC<Props> = (props: Props) => {
    return (
        <div className="comment">
            <a href="/" className= "avatar">
            <img alt="avatar" src={props.profile} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                     <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}
export default CommentDetail;