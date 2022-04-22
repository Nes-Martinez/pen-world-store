import { Send } from "@material-ui/icons";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <SectionHeading>Stay in touch!</SectionHeading>
      <SectionText>
        For the latest in sales, new products, and more.
      </SectionText>
      <InputContainer>
        <Input placeholder="Enter Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 50vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SectionHeading = styled.div`
  font-size: clamp(1rem, 7vw, 2.7rem);
  text-align: center;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #480048;

  @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  }
`;

const SectionText = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: center;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  letter-spacing: 2px;
  color: #480048;

  @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  width: 40%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #a81878;
  color: white;

  &:hover {
    background-color: #9078a8;
    transition: all 0.2s ease-in-out;
  }
`;
