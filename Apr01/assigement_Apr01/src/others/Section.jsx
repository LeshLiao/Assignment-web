
import { LevelContext } from './LevelContext.jsx';
import { useContext } from 'react';

import PropTypes from 'prop-types';
// export default function Section({ children }) {
export default function Section({  children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
        <LevelContext.Provider value={level + 1}>
          level: {level}
          {children}
        </LevelContext.Provider>
    </section>
  );
}

Section.propTypes = {
  // level: PropTypes.number,
  children: PropTypes.node,
};