import API from "./interceptor";

//Blog
export const getAllBlog = () => API.get("/blog/blogs/all");
export const getBlogDetail = (blogId) => API.get(`/blog/${blogId}`);

//user
export const signInUser = (user) => API.post("/auth/signin", user);
export const signUpUser = (user) => API.post("/auth/signup", user);
