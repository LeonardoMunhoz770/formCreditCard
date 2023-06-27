import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #111827;
  flex-direction: column;
  @media (max-width: 740px) {
    background-color: #1f2937;
  }
`;

export const ContentCard = styled.form`
  width: 736px;
  height: 420px;
  border-radius: 8px;
  padding: 32px 32px 32px 32px;
  background-color: #1f2937;
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    width: 90%;
  }
  @media (max-width: 740px) {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  @media (max-width: 740px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 375px;
  }
`;

export const DataCard = styled.form`
  width: 328px;
  height: 265px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 24px;
  width: 100%;
`;

export const LabelCard = styled.label`
  color: #e5e7eb;
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap");
  font-family: "Source Sans 3", sans-serif;
  font-size: 15px;
`;

export const InputNumberCard = styled.input`
  background-color: #111827;
  border-radius: 4px;
  height: 48px;
  border: solid #9ca3af;
  border-width: 0.1rem;
  padding-inline-start: 12px;
  font-size: 15px;
  color: #e5e7eb;
  &:focus {
    border-color: #9333ea;
  }
`;

export const InputNameCard = styled.input`
  background-color: #111827;
  border-radius: 4px;

  height: 48px;
  border: solid #9ca3af;
  border-width: 0.1rem;
  padding-inline-start: 12px;
  font-size: 15px;
  color: #e5e7eb;
  &:focus {
    border-color: #9333ea;
  }
`;

export const InputValidCard = styled.input`
  background-color: #111827;
  border-radius: 4px;
  height: 48px;
  border: solid #9ca3af;
  border-width: 0.1rem;
  padding-inline-start: 12px;
  font-size: 15px;
  color: #e5e7eb;
  width: 182px;
  &:focus {
    border-color: #9333ea;
  }
`;

export const InputCVV = styled.input`
  background-color: #111827;
  border-radius: 4px;
  height: 48px;
  border: solid #9ca3af;
  border-width: 0.1rem;
  padding-inline-start: 12px;
  font-size: 15px;
  color: #e5e7eb;
  width: 130px;
  &:focus {
    border-color: #9333ea;
  }
`;

export const ValidCVV = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ContainerImageCard = styled.figure`
  width: 280px;
  height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px;
  @media (max-width: 740px) {
    height: 100%;
    margin-bottom: 48px;
    gap: 20px;
  }
`;

export const ImageCard = styled.img`
  border-radius: 16px;
`;

export const SecurityData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IconSecurity = styled.img``;

export const LabelSecurity = styled.label`
  color: #e5e7eb;
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap");
  font-family: "Source Sans 3", sans-serif;
  font-size: 15px;
`;

export const ButtonAdd = styled.button`
  background-color: red;
  width: 672px;
  height: 56px;
  background-color: #9333ea;
  border-radius: 4px;
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap");
  font-family: "Source Sans 3", sans-serif;
  font-size: 15px;
  color: #f9fafb;
  border-style: none;
  cursor: pointer;
  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 740px) {
    width: 327px;
  }
`;

export const HeaderCard = styled.figure`
  position: absolute;
  width: 232px;
  height: 32px;
  margin-top: 16px;
  margin-left: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BrandCard = styled.img``;

export const IconContactless = styled.img`
  width: 24px;
  height: 24px;
`;

export const NumberCard = styled.div`
  position: absolute;
  height: 16px;
  width: 232px;
  margin-top: 120px;
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap");
  font-family: "Source Sans 3", sans-serif;
  font-size: 15px;
  color: #f9fafb;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 0.3em;
`;

export const FooterCard = styled.div`
  position: absolute;
  margin-top: 185px;
  width: 232px;
  display: flex;
  justify-content: space-between;
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap");
  font-family: "Source Sans 3", sans-serif;
  font-size: 14px;
  color: #f9fafb;
  height: 16px;
`;

export const NameCard = styled.label``;

export const ValidateCard = styled.label``;

export const CardBackground = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundCardFocus = styled.img`
  border-radius: 16px;
  width: 248px;
  height: 148.8px;
`;

export const LineCode = styled.img`
  position: absolute;
  width: 248px;
  margin-bottom: 80px;
`;

export const ContainerCVV = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 46px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LineCVV = styled.img`
  width: 190px;
`;

export const CodeCVV = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap");
  font-family: "Source Sans 3", sans-serif;
  font-size: 14px;
  color: #f9fafb;
`;
