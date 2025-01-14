import { CgProfile } from 'react-icons/cg';
import style from './CommentCard.module.scss'

export function CommentCard({imgSrc, profileName, publishedDate, commentText}) {
  return (
    <article className={style.CommentCard}>
      {imgSrc ? <img src={imgSrc} alt="profile-icon"/> : <CgProfile/>}
      
      <div>
        <h5>{profileName}</h5>
        <p>{publishedDate}</p>
        <p>{commentText}</p>
      </div>
    </article>
  );
}
