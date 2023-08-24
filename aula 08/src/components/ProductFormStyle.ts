import styled from 'styled-components';

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RatingLabel = styled.span`
  margin-right: 10px;
`;

export const StarIcon = styled.span<{ $active: boolean }>`
  font-size: 24px;
  color: ${({ $active }) => ($active ? '#FFD700' : '#ccc')};
  cursor: pointer;
`

export const ReviewTextArea = styled.textarea`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`