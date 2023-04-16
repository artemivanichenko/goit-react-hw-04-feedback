import PropTypes from 'prop-types';
import { StyledTextInfo } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <StyledTextInfo>{message}</StyledTextInfo>
    </>
  );
};
Notification.propTypes = {
  message: PropTypes.string,
};
