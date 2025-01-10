import style from './CommentInput.module.scss'

export function CommentInput({ num_comments }) {
  return (
    <div className={style.commentInput}>
      <div>
        <p>Kommenter</p>
        <p>{num_comments}</p>
      </div>
      
      <div>
        <p>ICON</p>
        <input type="text" />
        <button>Indsæt</button>
      </div>
    </div>
  );
}
