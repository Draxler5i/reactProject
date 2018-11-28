import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const onChangeHadler = (changeFindPost, event, {value}) => changeFindPost(value)

const SearchBar = ({ posts, changeFindPost }) => {
    const post = posts.map( ({ id:key, id:value, title:text }) => ({
        key, value, text
      }) );

    return <Dropdown
        placeholder="Select a post"
        search
        selection
        options={post}
        key = {post.key}
        onChange={onChangeHadler.bind({}, changeFindPost)}
    />

};

SearchBar.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
      body: PropTypes.string
    })).isRequired,
    changeFindPost: PropTypes.func.isRequired
}  

export default SearchBar;