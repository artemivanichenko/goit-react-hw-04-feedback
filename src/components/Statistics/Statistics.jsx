import { Notification } from 'components/Notification/Notification';
import { StyledSecondTitle, StyledTextInfo } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <StyledSecondTitle>Statistics</StyledSecondTitle>

      {percentage() === 'NaN' ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <StyledTextInfo>Good: {good}</StyledTextInfo>
          <StyledTextInfo>Neutral: {neutral}</StyledTextInfo>
          <StyledTextInfo>Bad: {bad}</StyledTextInfo>
          <StyledTextInfo>Total: {total()}</StyledTextInfo>
          <StyledTextInfo>Percentage: {percentage()}%</StyledTextInfo>
        </>
      )}
    </>
  );
};
