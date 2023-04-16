import { Notification } from 'components/Notification/Notification';
import { StyledSecondTitle, StyledTextInfo } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <StyledSecondTitle>Statistics</StyledSecondTitle>
      <StyledTextInfo>Good: {good}</StyledTextInfo>
      <StyledTextInfo>Neutral: {neutral}</StyledTextInfo>
      <StyledTextInfo>Bad: {bad}</StyledTextInfo>
      <StyledTextInfo>Total: {total()}</StyledTextInfo>
      {percentage() === 'NaN' ? (
        <Notification message="There is no feedback" />
      ) : (
        <StyledTextInfo>Percentage: {percentage()}%</StyledTextInfo>
      )}
    </>
  );
};
