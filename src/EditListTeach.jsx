import React from "react";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const EditListTeach = ({
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
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  function getTeachers() {
    fetch("https://63f4ee4d3f99f5855dba9b9b.mockapi.io/teachers", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setTeachers(res))
      .catch((e) => console.log(e));
  }

  useEffect(() => getTeachers(), []);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle);
  };

  return (
    <>
      {" "}
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
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Batches Assigned</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teach) => {
                      return (
                        <tr>
                          <th scope="row">{teach.id}</th>
                          <td>{teach.name}</td>
                          <td>{teach.email}</td>
                          <td>{teach.phone}</td>
                          <td>{teach.batches}</td>
                          <td>
                            <IconButton
                              onClick={() =>
                                navigate(`/edit-teacher/${teach.id}`)
                              }
                              color="secondary"
                            >
                              <EditIcon />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditListTeach;
