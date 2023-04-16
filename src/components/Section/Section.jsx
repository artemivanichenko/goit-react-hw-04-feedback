import PropTypes from 'prop-types';
import { StyledSecondTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <StyledSecondTitle>{title}</StyledSecondTitle>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
