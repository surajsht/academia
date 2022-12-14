import './sectionHeader.css'

const SectionHeader = (prop) => {
  return (
    <div className="theme-section-header">
      <h2 className="entry-title font-size-xsmall header-category"> {prop.category} </h2>
      <h2 className="entry-title font-size-big header-title">{prop.title}</h2>
    </div>
  )
}

export default SectionHeader
