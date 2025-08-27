const ComicsCard = () => {
  return (
   <div className="comic-card">
      <img src={comic.thumb} 
      alt={comic.title} />
      <h5>{comic.title}</h5>
    </div>
  )
}

export default ComicsCard
