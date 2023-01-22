import ProfileDetails from '../ProfileDetails'
import './index.css'

const FilterJobs = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(each => {
      const {changeEmploymentType} = props
      const onChangeEmployType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="checkbox-list"
          key={each.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="radio"
            id={each.employmentTypeId}
            value={each.employmentTypeId}
          />
          <label htmlFor={each.employmentTypeId} className="label">
            {each.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salHeading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salContainer">
      <h1 className="salHeading">Salary Range</h1>
      <ul className="salRangeContainer">{getSalaryRangeList()}</ul>
    </div>
  )

  return (
    <div className="filter">
      <ProfileDetails />
      <hr className="hr" />
      {renderEmploymentType()}
      <hr className="hr" />
      {renderSalaryRange()}
    </div>
  )
}

export default FilterJobs
