import API from "./interceptor";

//Blog
export const getAllBlog = () => API.get("/blog/blogs/all");
export const getBlogDetail = (blogId) => API.get(`/blog/${blogId}`);
export const getBlogByFilter = ({ page, pageSize, sortBy, order }) =>
  API.get(`/blog/blogs/filter?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&order=${order}`);
export const updateBlogStatus = (blogId, status) =>
  API.post("/blog/change_status", { blogId, status });
export const getBlogByUser = () => API.get("/blog/blogs/me");
export const deleteBlog = ({ blogId }) => API.delete("/blog/blogs/delete", { data: { blogId } });
export const createBlog = (data) =>
  API.post("/blog/create", data, { headers: { "Content-Type": "multipart/form-data" } });
//user
export const signInUser = (user) => API.post("/auth/signin", user);
export const signUpUser = (user) => API.post("/auth/signup", user);
export const getUserDetails = () => API.get("/user/me");

export const getAllUsers = (params) => API.get("/user/filter", { params });
export const changeUserStatus = (id) => API.patch("/user/change_status", { id });
//categories
export const getCategories = () => API.get("/category");
