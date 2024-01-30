import { changeUserStatus, getAllUsers, getBlogByFilter, updateBlogStatus } from "@/api";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Badge, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { endLoading, startLoading } from "@/redux/blog/blogSlice";
import toast from "react-hot-toast";
import PaginationServerSide from "../common/PaginationServerSide";
import { useMutation } from "react-query";
import { format } from "date-fns";
import { FiEdit } from "react-icons/fi";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [totalSize, setTotalSize] = useState(0);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ sortBy: "createdAt", order: "desc" });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState("");
  const pageSize = 3;
  const {
    data,
    isLoading: dataLoading,
    refetch,
  } = useFetch("admin-users", () =>
    getAllUsers({
      skip: 0,
      limit: 5,
      sortBy: "email",
      order: "desc",
    })
  );
  console.log(data);
  useEffect(() => {
    if (data) {
      refetch();
      setUsers(data?.data.users || []);
      setTotalSize(data?.data.totalUsers);
    }
  }, [data, page]);
  console.log(users);
  const handleSort = (sortBy) => {
    setSortConfig({
      sortBy,
      order: sortConfig.order === "asc" ? "desc" : "asc",
    });
  };
  const pageCount = Math.ceil(totalSize / pageSize);

  //Edit Status
  const handleStatusChange = (event) => {
    setUpdatedStatus(event.target.value);
  };
  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setUpdatedStatus(blog.status);
  };
  const { mutate: changeStatus, isLoading } = useMutation(changeUserStatus, {
    onSuccess: (data) => {
      toast.success(data.data.message);
      setUpdatedStatus("");
      setSelectedBlog(null);
      refetch();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSaveChanges = async (userId, event) => {
    try {
      console.log("User ID:", userId);
      console.log("Updated Status:", updatedStatus);
      changeStatus({ id: userId });
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  if (dataLoading) {
    return <Spinner lg />;
  }
  console.log(isLoading, dataLoading);
  return (
    <div>
      <table className="table  mb-0 bg-white" style={{ minHeight: "300px" }}>
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th onClick={() => handleSort("title")}>Email</th>
            <th onClick={() => handleSort("status")}>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((blog) => (
              <tr key={blog._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{blog.username}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">{blog.email}</p>
                </td>
                <td>
                  {selectedBlog === blog ? (
                    <Form>
                      <Form.Group controlId="statusDropdown">
                        <Form.Control
                          as="select"
                          value={updatedStatus}
                          onChange={handleStatusChange}
                        >
                          <option value="active">active</option>
                          <option value="suspended">suspended</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  ) : (
                    <Badge bg={blog.status === "active" ? "success" : "danger"}>
                      {blog.status}
                    </Badge>
                  )}
                </td>
                <td>
                  {selectedBlog === blog ? (
                    // Show "Save Changes" button when editing
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded"
                      onClick={(event) => handleSaveChanges(blog._id, event)}
                    >
                      {isLoading ? <Spinner sm /> : "Save"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded"
                      onClick={() => handleEditClick(blog)}
                    >
                      <FiEdit className="icon" size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
