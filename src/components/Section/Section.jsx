import { StyledSecondTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <StyledSecondTitle>{title}</StyledSecondTitle>
      {children}
    </>
  );
};
