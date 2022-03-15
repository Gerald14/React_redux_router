import React,{ useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = props => {
  const { isHome } = props;
  const [textSearch,setSearch] = useState('');
  const inputStyle = classNames('input',{
    isHome,
  });

  const handleInput = event => {
    setSearch(event.target.value);
    console.log('first')
  }

  const handleKeyEnter = event => {
    event.stopPropagation();
    event.preventDefault();
    if(event.key==='Enter')
    props.searchVideo(textSearch)
    console.log('enter')
  }
  return(
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input 
        type="text" 
        className={inputStyle} 
        placeholder="Buscar..."
        onKeyPress={handleKeyEnter}
        onChange={handleInput}
      />
    </section>
  );
}

const mapDispatchToProps = {
  searchVideo,
}

export default connect(null,mapDispatchToProps)(Search);