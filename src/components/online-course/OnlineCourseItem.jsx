const OnlineCourseItem = ({ data }) => {
  let { id, title, courses, img } = data
  return (
    <div className="course-item">
      <div className="course-item-content">
        <img src={img} alt={title} />
        <h2 className="entry-title font-size-xsmall"> {title} </h2>
        <button className="theme-primary-btn"> {courses} </button>
      </div>
    </div>
  )
}

export default OnlineCourseItem
