import OnlineCourseData from "./OnlineCourseData"
import SectionHeader from "../section-header/SectionHeader"
import OnlineCourseItem from "./OnlineCourseItem"
import "./onlineCourse.css"

const OnlineCourse = () => {
  return (
    <div className="online-course">
      <div className="container">
        <div className="row">
          <div className="column column-12">
            <SectionHeader
              category="online course"
              title="Browse Our Online Courses"
            />

            <div className="theme-section-body">
              <div className="course-item-container">
                {OnlineCourseData.map((data, idx) => {
                  return <OnlineCourseItem key={idx} data={data} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineCourse
