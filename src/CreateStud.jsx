import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const CreateStud = ({
  handleOpen,
  handleOpen1,
  handleOpen2,
  open,
  open1,
  open2,
  setOpen,
  setOpen1,
  setOpen2,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teacher, setTeacher] = useState("");
  const [batch, setBatch] = useState("");
  const [marks, setMarks] = useState("");

  const navigate = useNavigate();
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle);
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          open1={open1}
          setOpen1={setOpen1}
          handleOpen1={handleOpen1}
          open2={open2}
          setOpen2={setOpen2}
          handleOpen2={handleOpen2}
        />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
            <div className="container-fluid">
              <div>
                <div className="add-user">
                  <TextField
                    onChange={(event) => setName(event.target.value)}
                    label="Name"
                    variant="standard"
                  />

                  <TextField
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                    variant="standard"
                  />

                  <TextField
                    onChange={(event) => setPhone(event.target.value)}
                    label="Phone"
                    variant="standard"
                  />

                  <TextField
                    onChange={(event) => setTeacher(event.target.value)}
                    label="Teacher"
                    variant="standard"
                  />

                  <TextField
                    onChange={(event) => setBatch(event.target.value)}
                    label="Batch"
                    variant="standard"
                  />

                  <TextField
                    onChange={(event) => setMarks(event.target.value)}
                    label="Marks"
                    variant="standard"
                  />
                </div>

                <Button
                  className="add-button"
                  onClick={() => {
                    const newStudent = {
                      name: name,
                      email: email,
                      phone: phone,
                      teacher: teacher,
                      batch: batch,
                      marks: marks,
                    };

                    fetch(
                      "https://63eb872df1a969340db9f818.mockapi.io/students",
                      {
                        method: "POST",
                        body: JSON.stringify(newStudent),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    )
                      .then((data) => data.json())
                      .then(() => navigate("/list-students"));
                  }}
                  variant="contained"
                >
                  Add Student
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStud;
