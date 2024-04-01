// import React from 'react'
import PropTypes from 'prop-types';

export default function Thumbnail({ size }) {
  return (
    <img
      className="avatar"
      src='https://fastly.picsum.photos/id/1037/200/300.jpg?hmac=4eugJlD2Tm8e9ZZIDrSXnYPKNyVQ9Mm58HkQrLYBy1c'
      alt='photo'
      width={size}
      height={size}
    />
  );
}

Thumbnail.propTypes = {
  size: PropTypes.string.isRequired
};