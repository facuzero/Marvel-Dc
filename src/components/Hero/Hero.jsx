import { Link } from 'react-router-dom';

export const Heroe = ({ id, superhero, alter_ego, first_appearance }) => {
  return (
    <div className='col-12 col-md-6'>
      <div className='card mb-3'>
        <div className='row g-0'>
          <div className='col-4'>
            <img className='img-fluid' src={`../assets/heroes/${id}.jpg`} alt='' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <div className='mt-3'>
                <Link to={`/heroe/${id}`}>más info</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
