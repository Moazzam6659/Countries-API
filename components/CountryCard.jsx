import { Link } from 'react-router-dom'

const CountryCard = ({ name, flag, population, region, capital, data }) => {
  return (
    <Link className='country-card' to={`/${name}`} state={data}>
      <div className='flag-container'>
        <img src={flag} alt={`${name} Flag`} />
      </div>
      <div className='card-text'>
        <h3 className='card-title'>{name}</h3>
        <p>
          <strong>Population: </strong>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard
