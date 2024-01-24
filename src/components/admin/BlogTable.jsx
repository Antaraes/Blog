import { getBlogByFilter, updateBlogStatus } from "@/api";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Badge, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { endLoading, startLoading } from "@/redux/blog/blogSlice";
import toast from "react-hot-toast";
import PaginationServerSide from "../common/PaginationServerSide";
import { useMutation } from "react-query";

const BlogTable = () => {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const [totalSize, setTotalSize] = useState(0);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ sortBy: "createdAt", order: "desc" });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState("");
  const pageSize = 2;
  const {
    data,
    isLoading: dataLoading,
    refetch,
  } = useFetch("admin-blogs", () => getBlogByFilter({ page, pageSize: 2 }));

  useEffect(() => {
    if (data) {
      refetch();
      setBlogs(data?.data.data || []);
      setTotalSize(data?.data.total);
    }
  }, [data, page]);
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
  const { mutate: changeStatus, isLoading } = useMutation(
    ({ id, status }) => updateBlogStatus(id, status),
    {
      onSuccess: (data) => {
        toast.success(data.data.message);
        setUpdatedStatus("");
        setSelectedBlog(null);
        refetch();
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  const handleSaveChanges = async (blogId, event) => {
    try {
      console.log(updatedStatus);
      changeStatus({ id: blogId, status: updatedStatus });
    } catch (error) {
      console.error("Error updating blog status:", error);
    }
  };
  if (dataLoading) {
    return <Spinner lg />;
  }
  console.log(isLoading, dataLoading);
  return (
    <div>
      <table className="table  mb-0 bg-white" style={{ height: "200px" }}>
        <thead className="bg-light">
          <tr>
            <th>User</th>
            <th onClick={() => console.log("Sort")} style={{ cursor: "pointer" }}>
              Date
            </th>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("status")}>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 &&
            blogs.map((blog) => (
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
                      <p className="fw-bold mb-1">{blog.created_by?.username}</p>
                      <p className="text-muted mb-0">{blog.created_by?.email}</p>
                    </div>
                  </div>
                </td>
                <td>{blog.createdAt}</td>
                <td>{blog.title}</td>
                <td>
                  {selectedBlog === blog ? (
                    <Form>
                      <Form.Group controlId="statusDropdown">
                        <Form.Control
                          as="select"
                          value={updatedStatus}
                          onChange={handleStatusChange}
                        >
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                          <option value="pending">Pending</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  ) : (
                    <Badge bg={blog.status === "approved" ? "success" : "danger"}>
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
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <PaginationServerSide page={page} pageCount={pageCount} setPage={setPage} />
      </div>
    </div>
  );
};

export default BlogTable;
