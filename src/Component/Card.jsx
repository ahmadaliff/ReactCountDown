const Card = ({ style, number, text }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <p>{number}</p>
        <div className={style.line} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default Card;
