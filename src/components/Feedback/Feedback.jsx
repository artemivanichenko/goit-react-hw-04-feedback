import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';
import { StyledItem, StyledButtonList } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  onTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  onPercentage = () => {
    return ((this.state.good / this.onTotal()) * 100).toFixed(0);
  };

  render() {
    return (
      <StyledItem>
        <Section title="Please leave feedback">
          <StyledButtonList>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </StyledButtonList>

          <Statistics
            {...this.state}
            total={this.onTotal}
            percentage={this.onPercentage}
          />
        </Section>
      </StyledItem>
    );
  }
}
