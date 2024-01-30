import { deleteCategories, getCategories } from "@/api";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { endLoading, startLoading } from "@/redux/blog/blogSlice";
import toast from "react-hot-toast";
import PaginationServerSide from "../common/PaginationServerSide";
import { useMutation } from "react-query";
import { FiEdit, FiTrash } from "react-icons/fi";
import { format } from "date-fns";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [totalSize, setTotalSize] = useState(0);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ sortBy: "createdAt", order: "desc" });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState("");
  const pageSize = 3;
  const { data, isLoading: dataLoading, refetch } = useFetch("categories", () => getCategories());
  console.log("Category", data);
  useEffect(() => {
    if (data) {
      refetch();
      setCategories(data?.data || []);
    }
  }, [data, page]);
  console.log(categories);
  const handleSort = (sortBy) => {
    setSortConfig({
      sortBy,
      order: sortConfig.order === "asc" ? "desc" : "asc",
    });
  };
  const pageCount = Math.ceil(totalSize / pageSize);

  // Edit Status
  const handleStatusChange = (event) => {
    setUpdatedStatus(event.target.value);
  };
  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setUpdatedStatus(category.status);
  };
  const { mutate: deleteCategory, isLoading } = useMutation(deleteCategories, {
    onSuccess: (data) => {
      toast.success(data.data.message);
      setUpdatedStatus("");
      setSelectedCategory(null);
      refetch();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSaveChanges = async (categoryId, event) => {
    try {
      console.log("Category ID:", categoryId);
      deleteCategory(categoryId);
    } catch (error) {
      console.error("Error updating category status:", error);
    }
  };

  if (dataLoading) {
    return <Spinner lg />;
  }
  const postToolTip = (
    <Tooltip id="tooltip">
      <strong>Delete Category</strong>
    </Tooltip>
  );
  console.log(isLoading, dataLoading);
  return (
    <div>
      <table
        className="table  mb-0 bg-white"
        style={{ minHeight: "300px", maxHeight: "100vh", overflowY: "scroll" }}
      >
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th onClick={() => handleSort("createdAt")}>CreatedAt</th>
            <th onClick={() => handleSort("created_by")}>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr key={category._id}>
                <td>
                  <p className="fw-bold mb-1">{category.name}</p>
                </td>
                <td>
                  <p className="text-muted mb-0">{format(category.createdAt, "MM/dd/yyyy")}</p>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={category.image || "https://mdbootstrap.com/img/new/avatars/8.jpg"}
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <p>{category.created_by.username}</p>
                  </div>
                </td>
                <td>
                  <OverlayTrigger placement="top" overlay={postToolTip}>
                    <button
                      type="button"
                      disabled={category.status === "deleted" && true}
                      className="btn btn-link btn-sm btn-rounded"
                      onClick={(event) => handleSaveChanges(category._id, event)}
                    >
                      {isLoading ? <Spinner sm /> : <FiTrash size={20} />}
                    </button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
