import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Badges.css';
import confLogo from '../assets/static/badge-header.svg';
import { requestData } from '../actions';
import Loader from '../components/Loader';
import Search from '../components/Search';
import BadgesUsers from '../components/BadgesUsers';
import BadgesRAndM from '../components/BadgesRAndM';

const Badges = (props) => {

  const { rickAndMortyState } = props;

  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacters = async (count) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`);
      const data = await response.json();
      (nextPage === 1) ? props.requestData(data.results) : props.requestData([].concat(rickAndMortyState.data, data.results));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(nextPage);
    setLoading(true);
  }, [nextPage]);

  const handleSubmit = (e) => { // add page
    e.preventDefault();
    setNextPage(nextPage + 1);
  };

  return (
    <>
      <div className='Badges'>
        <div className='Badges__hero'>
          <div className='Badges__container'>
            <img className='Badges_conf-logo' src={confLogo} alt='Conf Logo' />
          </div>
        </div>
      </div>
      <div className='Badges__container'>
        <Search />
        <div className='Badges__list'>
          <BadgesUsers stateBadge='searchResultBadges' />
          <BadgesRAndM stateBadge='searchResultRAndM' />
        </div>
      </div>
      <div className='Badges__container'>
        <div className='Badges__buttons'>
          <Link to='/BadgeNew' className='btn btn-primary'>
            New Badge
          </Link>
        </div>
        <div className='Badges__list'>
          <div>
            <BadgesUsers stateBadge='users' />
            <BadgesRAndM stateBadge='rickAndMortyState' />
          </div>
        </div>
        {error && <p>Something went wrong.</p>}
        {loading && (
          <div className='Badges__buttons-button'>
            <Loader />
          </div>
        )}
        <div className='Badges__buttons-button'>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className='btn btn-primary' onClick={handleSubmit}> More Badges</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rickAndMortyState: state.rickAndMortyState,
  };
};

const mapDispatchToProps = {
  requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Badges);
