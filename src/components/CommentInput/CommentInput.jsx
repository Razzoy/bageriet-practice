import { useContext, useState } from 'react';
import style from './CommentInput.module.scss'
import { UserContext } from '../../context/userContext';

export function CommentInput({ num_comments, productID, setCommentStatus}) {
  
  const [newComment, setNewComment] = useState();
  const [error, setError] = useState();
  const [IsLoading, setIsLoading] = useState();
  const { userData } = useContext(UserContext);


  const postComment = () => {
    let token = userData.access_token;
    let body = new URLSearchParams();
    let url = 'https://api.mediehuset.net/bakeonline/comments'
    body.append('title', 'Ny Kommentar');
    body.append('comment', newComment);
    body.append('user_id', userData.user_id);
    body.append('product_id', productID);
    body.append('active', true);
    const options = {
      method: "POST",
      body: body,
      headers: token ? {Authorization: `Bearer ${token}`} : {},
    };

    fetch(url, options)
    .then((res) => res.json())
    .then((data) => setCommentStatus(data))
    .catch((err) => setError(err))
    .finally(() => setIsLoading(false))
    
  }
  

  return (
    <div className={style.commentInput}>
      <div>
        <p>Kommenter</p>
        <p>{num_comments}</p>
      </div>
      
      <div>
        <p>ICON</p>
        <input type="text" onChange={(event) => setNewComment(event.target.value)} />
        <button onClick={() => postComment()} >Indsæt</button>
      </div>
    </div>
  );
}
