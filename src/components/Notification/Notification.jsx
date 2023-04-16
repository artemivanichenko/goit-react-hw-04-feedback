import { StyledTextInfo } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <StyledTextInfo>{message}</StyledTextInfo>
    </>
  );
};
