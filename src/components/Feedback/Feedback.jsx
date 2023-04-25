import { useState } from 'react';
import { StyledItem, StyledButtonList } from './Feedback.styled';
import { Section, Statistics, FeedbackOptions } from '../index';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(e => e + 1);
        break;
      case 'neutral':
        setNeutral(e => e + 1);
        break;
      case 'bad':
        setBad(e => e + 1);
        break;
      default:
        return;
    }
  };

  const onTotal = () => {
    return good + neutral + bad;
  };
  const onPercentage = () => {
    return ((good / onTotal()) * 100).toFixed(0);
  };

  return (
    <StyledItem>
      <Section title="Please leave feedback">
        <StyledButtonList>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </StyledButtonList>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={onTotal}
          percentage={onPercentage}
        />
      </Section>
    </StyledItem>
  );
};
