import { StyledButtonItem, StyledButton } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <StyledButtonItem key={option}>
            <StyledButton
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </StyledButton>
          </StyledButtonItem>
        );
      })}
    </>
  );
};

//   <StyledButton>Good</StyledButton>
//           <StyledButton>Neutral</StyledButton>
//           <StyledButton>Bad</StyledButton>
