import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ posts, encontrado }) => {
    const pos = posts.map( ({ id:key, id:value, title:text }) => ({
        key, value, text
      }) );
    
    const auxValue = (value) => posts.find( item => item.key === value);

    return <Dropdown
        placeholder="Select a post"
        search
        selection
        options={pos}
        key = {pos.key}
        onChange={(e, {value}) => {
            encontrado = auxValue(value);
            console.log(encontrado);
        }}
    />

};

SearchBar.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
      body: PropTypes.string
    })).isRequired,
   
    encontrado: PropTypes.object.isRequired
}  

export default SearchBar;