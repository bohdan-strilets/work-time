import styled from '@emotion/styled';
import { SizeProps } from 'types/props/UploadFileProps';

export const Wrapper = styled.div`
  margin-bottom: var(--medium-indent);
`;

export const Image = styled.img`
  width: 220px;
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const Video = styled.video`
  width: 320px;
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 10px;
`;

export const Size = styled.span<SizeProps>`
  color: ${({ size, validationSize }) =>
    size > validationSize ? 'var(--red-color)' : 'var(--green-color)'};
`;
