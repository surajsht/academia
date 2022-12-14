const AboutHomeItem = ({ data }) => {
  let { id, title, info, img } = data
  return (
    <div className="about-home-item">
      <div className="about-home-icon">
        <img src={img} alt={title} />
      </div>

      <div className="about-home-content">
        <h2 className="entry-title font-size-small">{title}</h2>
        <p className = 'font-size-xsmall'> {info} </p>
      </div>
    </div>
  )
}

export default AboutHomeItem
