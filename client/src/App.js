import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Button,ButtonGroup,Form,Input,FormGroup,Label, ListGroup, ListGroupItem} from "reactstrap";
import { useCookies } from "react-cookie";
import "./App.css";
import { uploadFile, login, signup, fetchUser } from "./service/api";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 



=======
import { Button, ButtonGroup, Form, Input, FormGroup, Label } from "reactstrap";
import { useCookies } from 'react-cookie';
import "./App.css";
import { uploadFile, login, signup } from "./service/api";
>>>>>>> origin/master
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
<<<<<<< HEAD
  const [cookies, setCookie, removeCookie] = useCookies(["orion-user"]);
  const [collection, setCollection] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [msg, setMsg] = useState("");
=======
  const [cookies, setCookie, removeCookie] = useCookies(['orion-user']);
  const [user, setUser] = useState(initialUser);
  const [msg, setMsg] = useState('');
>>>>>>> origin/master
  const [formData, setFormData] = useState(initialForm);
  const [isLogin, setIsLogin] = useState(true);
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

<<<<<<< HEAD

=======
>>>>>>> origin/master
  const fileInputRef = useRef();

  const url =
    "https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-the-laptop-as-freelancer-2407294-2012361.png";

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
<<<<<<< HEAD
      const response = await uploadFile(data, user._id);
      setResult(response.path);
      setUser(response.user);
      setFile("");
    }
  };

  async function fetchUserData(user_id) {
    const res = await fetchUser(user_id);
    if (res.success) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      setMsg("");
      setUser(res.response);
      setCookie("orion-user", res.response, {
        path: "/",
        expires: expiryDate,
      });
    } else {
      setMsg('Error while fetching details');
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const res = await login(formData);
    if (res.success) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      setMsg("");
      setUser(res.response);
      setCookie("orion-user", res.response, {
        path: "/",
        expires: expiryDate,
      });
=======

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
>>>>>>> origin/master
      setFormData(initialForm);
    } else {
      setMsg(res.error);
    }
  }
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const res = await signup(formData);
<<<<<<< HEAD
    if (res.success) {
      setMsg("Account created succesfully, please Login");
      setFormData(initialForm);
    } else {
      setMsg(res.error);
    }
  }

  function logout() {
    removeCookie("orion-user", {
      path: "/",
    });
    setUser(initialUser);
    setFormData(initialForm);
    setCollection(false);
    setIsLogin(true);
    setFile("");
    setResult("");
  }
  useEffect(() => {
    if (cookies["orion-user"]) {
      fetchUserData(cookies["orion-user"]._id)
    }
  }, []);
  useEffect(() => {
    if (cookies["orion-user"]) {
=======
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
>>>>>>> origin/master
      getImage();
    }
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

<<<<<<< HEAD
  
  if (user.email && user.password) {
    return (
      <>
        <div className="main"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#eff5fe",
             
          }}
        > 
          <div  className="animation"
            style={{
              minHeight: "400px",
              minWidth: "400px",
              height: "60%",
              width: "40%",
              backgroundColor: "white",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="box"
              style={{
                height: "93%",
                width: "93%",
                border: "3px dashed #0288d147",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  top: "0",
                  right: "0",
                  margin: "2%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: collection ? "skyblue" : "white",
                }}
              >
                 <Tippy content="My Collection">
                <img className="open-folder"
                  src="./open-folder.png"
                  alt="collection"
                  style={{
                    objectFit: "contain",
                    height: "70%",
                    width: "70%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCollection(!collection);
                  }}
                />
                </Tippy>
              </div>
              <div
               style={{
                  position: "absolute",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  top: "0",
                  left: "0",
                  margin: "2%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                 
                }}
              >
               <Tippy content="Logout">
                <img className="logout"
                  src="./logout.png"
                  alt="logout"
                  style={{
                    objectFit: "contain",
                    height: "70%",
                    width: "70%",
                    cursor: "pointer",
                  }}
                  onClick={logout}
                />
                </Tippy>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
      
              <img  
                src="./file.png"
                alt=""
                className="icon"
                style={{
                  objectFit: "contain",
                
                }}
              />
        <br></br>
              <p>
              
                Drop your files here or <a style={{
                  color: 'blue',
                  cursor: 'pointer'
                }} onClick={() => {
                  setCollection(true);
                }}>browse here</a>
              </p>
              <button className = "upload" type="button" class="btn btn-primary"  onClick={() => onUploadClick()}
                style={{
                  cursor: "pointer",

                }}>Upload</button>
               

              {/* <button
=======
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
>>>>>>> origin/master
                onClick={() => onUploadClick()}
                style={{
                  cursor: "pointer",
                }}
              >
                Upload
<<<<<<< HEAD
              </button> */}

=======
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
>>>>>>> origin/master
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />

<<<<<<< HEAD
              <a style={{
                color:"green"
              }}href={result} target="_blank" rel="noreferrer">
=======
              <a href={result} target="_blank" rel="noreferrer">
>>>>>>> origin/master
                {result}
              </a>
            </div>
          </div>
<<<<<<< HEAD
          {collection ? (
            <div className="animation"
              style={{
                minHeight: "400px",
                minWidth: "400px",
                height: "80%",
                width: "40%",
                backgroundColor: "white",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "93%",
                  width: "93%",
                  border: "3px dashed #0288d147",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  flexDirection: "column",
                  position: "relative",
                  padding: "20px",
                  overflowY: 'auto'
                }}
              >
                <ListGroup
                  style={{
                    width: "100%",
                  }}
                >
                  {user.files.map((item) => (
                    <ListGroupItem>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                          }}
                        >
                          {item.name}
                        </p>
                        <div
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <img
                              src="./download.png"
                              alt="download"
                              style={{
                                objectFit: "contain",
                                height: "100%",
                                width: "100%",
                                cursor: "pointer",
                              }}
                              onClick={() => window.open(`http://localhost:8000/file/${item._id}`, '_blank')}
                            />
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </div>
          ) : (
            <div className="animation" ><Tippy content="Hello Folks ....  Lightning fast file sharing capabilities ." ><img
              src={url}
              alt=" "
              className="img user"
              style={{
                objectFit: "contain",
                height: "400px",
                width : "400px",
              }}
            />
         </Tippy> </div>)}
=======

          <img src={url} alt=" " className="img" />
>>>>>>> origin/master
        </div>
      </>
    );
  }

  return (
<<<<<<< HEAD
    <div style={{ backgroundColor: "#eff5fe" }}>
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

      <div className="rotate "
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="./logo-removebg-preview.png"
          alt=""
          height={"200px"}
          width={"200px"}
        />
      </div>

      <div
        style={{
          height: user.email === "admin@mail.com" ? "58vh" : "60vh",
=======
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
>>>>>>> origin/master
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
<<<<<<< HEAD
        <Form className     
           style={{
            width: "50%",
          
           
          }}
          onSubmit={isLogin ? handleLoginSubmit : handleSignUpSubmit}
        >
          <FormGroup  >
=======
        <Form
          style={{
            width: "50%",
          }}
          onSubmit={isLogin ? handleLoginSubmit : handleSignUpSubmit}
        >
          <FormGroup>
>>>>>>> origin/master
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
