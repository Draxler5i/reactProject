import React from 'react';
import CommentsPost from '../CommentsPost/CommentsPost';
import Autocomplete from '../Autocomplete/Autocomplete';

const WrapperMainView = () => (
    <div>
        <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]} />
        <CommentsPost/>
    </div>
);

export default WrapperMainView;