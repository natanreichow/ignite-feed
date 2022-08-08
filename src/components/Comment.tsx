import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/natanreichow.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Natan Reichow</strong>
                            <time title='03 August, 2022' dateTime='2022-08-03 17:27:00'>47min ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}