import AboutImg from "./img/about.jpg"
import AboutHomeData from "./AboutHomeData"
import AboutHomeItem from "./AboutHomeItem"
import SectionHeader from "../section-header/SectionHeader"
import './aboutHome.css'

const AboutHome = () => {
  return (
    <div className="about-home">
      <div className="container">
        <div className="row">
          <div className="column column-6 column-sm-12">
            <img src={AboutImg} alt="" />
          </div>

          <div className="column column-6 column-sm-12">
            <h2 className="entry-title font-size-small"> learn anything </h2>
            <h2 className="entry-title font-size-big">
              Benefits About Online Learning Expertise
            </h2>

            <div className="about-home-data">
              {AboutHomeData.map((data, idx) => {
                return <AboutHomeItem key={idx} data={data} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome
