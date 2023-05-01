import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Form, Input, FormGroup, Label } from "reactstrap";
import { useCookies } from 'react-cookie';
import "./App.css";
import { uploadFile, login, signup } from "./service/api";
const initialUser = {
  email: "",
  password: "",
  files: [],
};

const initialForm = {
  email: "",
  password: "",
};

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['orion-user']);
  const [user, setUser] = useState(initialUser);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);
  const [isLogin, setIsLogin] = useState(true);
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  const url =
    "https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-the-laptop-as-freelancer-2407294-2012361.png";

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      const response = await uploadFile(data);
      setResult(response.path);
    }
  };

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const res = await login(formData);
    if (res.success){
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      setMsg('');
      setUser(res.response);
      setCookie('orion-user',
        res.response,
        {
          path: '/',
          expires: expiryDate 
        }
      )
      setFormData(initialForm);
    } else {
      setMsg(res.error);
    }
  }
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const res = await signup(formData);
    if (res.success){
      setMsg('Account created succesfully, please Login');
      setFormData(initialForm);
    } else {
      setMsg(res.error);
    }  
  }

  function logout(){
    removeCookie('orion-user',{
      path: '/'
    });
    setUser(initialUser);
  }
  useEffect(() => {
    if (cookies["orion-user"]){
      setUser(cookies["orion-user"]);
    }
  }, []);
  useEffect(() => {
    if (cookies["orion-user"]){
      getImage();
    }
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  if (user.email && user.password) {
    return (
      <>
        <div className="heading">
          <img src="./logo.png" alt="" height={"200px"} width={"200px"} />
        </div>

        <div className="container">
          <div className="fborder">
            <div className="wrapper">
             
              <h3>Drop Your Files Here</h3>
          
              <img src="./file.png" alt="" className="icon" />

              <button
                onClick={() => onUploadClick()}
                style={{
                  cursor: "pointer",
                }}
              >
                Upload
              </button>
              <button
                onClick={logout}
                style={{
                  backgroundColor: 'gray',
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />

              <a href={result} target="_blank" rel="noreferrer">
                {result}
              </a>
            </div>
          </div>

          <img src={url} alt=" " className="img" />
        </div>
      </>
    );
  }

  return (
    <div>
      <div
          style={{
            height: "15vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonGroup>
            <Button
              color="primary"
              outline
              onClick={() => {
                setIsLogin(true);
              }}
              active={isLogin}
            >
              Login
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => {
                setIsLogin(false);
              }}
              active={!isLogin}
            >
              Sign Up
            </Button>
          </ButtonGroup>
        </div>
      <div
        style={{
          height: user.email === "admin@mail.com" ? "85vh" : "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form
          style={{
            width: "50%",
          }}
          onSubmit={isLogin ? handleLoginSubmit : handleSignUpSubmit}
        >
          <FormGroup>
            <p>{msg}</p>
            <Label for="email-input">Email</Label>
            <Input
              id="email-input"
              name="email"
              placeholder="Enter the Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="password-input">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter the password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormGroup>
          <Button>{isLogin ? "Login" : "Sign Up"}</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
