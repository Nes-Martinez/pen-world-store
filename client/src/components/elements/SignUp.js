import { Send } from "@material-ui/icons";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Title>Stay in touch!</Title>
      <Text>For the latest in sales, new products, and more.</Text>
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
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
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
  background-color: #06114f;
  color: white;
`;
