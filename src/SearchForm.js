import React from "react";
import "./SearchForm.css"

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter search term..."
        onChange={event => props.onSearchValueChange(event.target.value)}
      />
      <div>
      <button disabled={props.isSearching}>Search</button>
      <button
        onClick={props.onSingleSearchClick} // if we want to pass a value it cannot be called directly by the onclick event
        // but over anonymous arrow function that allows parameters
        disabled={props.isSearching}
      >
        I'm feeling funny
      </button>
      </div>
    </form>
  );
};

// before we could not add another function - no return:
// const SearchForm = (props) => (
//   <form onSubmit={props.onFormSubmit}>
//     <input
//       type="text"
//       placeholder="Enter search term..."
//       onChange={props.onSearchValueChange}
//     />
//     <button disabled={props.isSearching}>Search</button>
//     <button
//       onClick={props.onSingleSearchClick} // if we want to pass a value it cannot be called directly by the onclick event
//       // but over anonymous arrow function that allows parameters
//       disabled={props.isSearching}
//     >
//       I'm feeling funny
//     </button>
//   </form>
// );

export default SearchForm;
