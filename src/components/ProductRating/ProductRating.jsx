import star from '../../assets/star.svg';
import emptyStar from '../../assets/empty-star.svg';

export default function ProductRating({ rating }) {
  const remainingStars = 5 - rating;

  return (
    <div>
      {[...Array(rating)].map((_, i) => {
        return <img key={i} src={star} alt="" />;
      })}
      {[...Array(remainingStars)].map((_, i) => {
        return <img key={i} src={emptyStar} alt="" />;
      })}
    </div>
  );
}
