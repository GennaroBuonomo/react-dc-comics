const ComicsCard = ({ src, title}) => {
  return (
    <div className="comic-card">
      <img src={src} alt={title} />
      <h5>{title}</h5>
    </div>
  )
}


export default ComicsCard
