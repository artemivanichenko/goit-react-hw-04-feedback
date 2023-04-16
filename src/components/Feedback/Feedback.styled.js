import styled from 'styled-components';

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 480px;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgb(147, 115, 156);
  margin: 10px auto;
  overflow: hidden;
  align-items: center;
`;
export const StyledSection = styled.section`
  font-size: 30px;
`;
export const StyledButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style-type: none;
`;
export const StyledButtonItem = styled.li`
  font-size: 18px;
`;
export const StyledButton = styled.button`
  padding: 6px 12px;
`;
