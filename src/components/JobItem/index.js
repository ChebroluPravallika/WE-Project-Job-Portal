import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import './index.css'

const JobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails

  return (
    <li className="similarItems">
      <div className="profileContainer">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="company-logo-url"
        />
        <div>
          <h1 className="title" style={{fontSize: '20px'}}>
            {title}
          </h1>
          <div className="rating-container">
            <AiFillStar className="star-icon" />
            <p className="count-rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="descHeading">Description</h1>
      <p className="similar-desc">{jobDescription}</p>
      <div className="locationCont">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <GoLocation className="location-logo" style={{paddingRight: '5px'}} />
          <p style={{color: 'white'}}>{location}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <BsBriefcaseFill
            className="location-logo-brief"
            style={{paddingRight: '5px'}}
          />
          <p style={{color: 'white'}}>{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default JobItem
