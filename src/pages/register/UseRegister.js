import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import uploadIcon from "../../assests/images/icon-upload.png";
import { userData } from "../../features/auth/authSlice";
import axios from "axios";

export default function UseRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = localStorage.getItem("loggedUser")
  // console.log("currentUser", user);

  const [state, setState] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(uploadIcon);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(state);
  };
  const onChangeFile = (e) => {
    const [file] = e.target.files;
    if (file) {
      let url = URL.createObjectURL(file);
      setState((prev) => ({
        ...prev,
        profilePicUrl: url,
      }));
      setUrl(url);
      console.log(url);
    }
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    const { firstName, lastName, password, confirmPassword } = state;
    const fullName = `${firstName} ${lastName}`;
    if (password === confirmPassword) {
      const res = await axios.post("http://localhost:5000/auth/register", {
        ...state,
        fullName: fullName,
      });
      console.log("response;", res.data);
      localStorage.setItem("loggedUser", JSON.stringify(res.data));
      setIsProcessing(false);
      // localStorage.setItem("user", "asdfsd");
      // localStorage.setItem("token", "token");
      // dispatch(userData(getUserDAta));
    } else {
      setError("Password & confirmPassword must be same");
    }
  };
  return {
    submitHandle,
    state,
    handleChange,
    url,
    onChangeFile,
    isProcessing,
    error,
  };
}
