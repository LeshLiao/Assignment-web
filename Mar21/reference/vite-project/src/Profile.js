import React from 'react'; // Import React if it's used in other parts of your code

export default function Profile() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement("img", {
        src: "https://i.imgur.com/MK3eW3As.jpg",
        alt: "Katherine Johnson"
      })
    )
  );
}

