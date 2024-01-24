import { deleteBlog, getBlogByUser, getUserDetails } from "@/api";
import { author, profileOverLay } from "@/assets/images";
import Spinner from "@/components/Spinner";
import getTimeDuration from "@/helper/getTimeDuration";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { Card, CardBody, Container, Image, Tab, Tabs } from "react-bootstrap";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: userData, isLoading } = useFetch("me", getUserDetails);
  const { data: blogs, isLoading: dataLoading, refetch } = useFetch("myBlogs", getBlogByUser);
  console.log(blogs);

  const pendingBlogs = blogs?.data?.filter((blog) => blog.status === "pending");
  const approvedBlogs = blogs?.data?.filter((blog) => blog.status === "approved");

  console.log("blogs", blogs?.data);
  if (isLoading) {
    return <Spinner lg />;
  }
  const handleDeleteBlog = async (blogId) => {
    try {
      const data = await deleteBlog({ blogId });
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const user = userData.data.user;

  return (
    <>
      <div style={{ height: "50vh" }}>
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          <Card.Img
            src={profileOverLay}
            alt="Card image"
            style={{ objectFit: "cover", height: "300px" }}
          />
          <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", textAlign: "center" }}>
            <Image src={author} alt="you" roundedCircle className="mr-2 py-3" width={100} />
            <Card.Title>{user.username}</Card.Title>
            <Card.Title style={{ color: "#888" }}>{user.email}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
      {dataLoading ? (
        <Spinner lg />
      ) : (
        <Container style={{ height: "100vh" }}>
          <Tabs
            defaultActiveKey="publish"
            id="justify-tab-example"
            className="mb-3"
            justify
            variant="underline"
          >
            <Tab eventKey="draft" title="Draft">
              Drafts
            </Tab>
            <Tab eventKey="pending" title="Pending">
              {pendingBlogs?.length > 0 ? (
                pendingBlogs?.map((blog) => (
                  <ProfileBlogCard blog={blog} key={blog._id} handleDeleteBlog={handleDeleteBlog} />
                ))
              ) : (
                <p className="text-center">There is no blogs</p>
              )}
            </Tab>
            <Tab eventKey="publish" title="Publish">
              {approvedBlogs?.length > 0 ? (
                approvedBlogs?.map((blog) => (
                  <ProfileBlogCard blog={blog} handleDeleteBlog={handleDeleteBlog} />
                ))
              ) : (
                <p className="text-center">There is no blogs</p>
              )}
            </Tab>
          </Tabs>
        </Container>
      )}
    </>
  );
};

export default ProfilePage;

export const ProfileBlogCard = ({ blog, handleDeleteBlog }) => (
  <Card style={{ width: "100%", marginBottom: "2rem" }}>
    <Card.Body>
      <div className="d-flex justify-content-between align-items-center">
        <Card.Title>{blog.title}</Card.Title>
        <div className="d-flex gap-3">
          <FaTrash className="icon" onClick={() => handleDeleteBlog(blog._id)} />
          <FiEdit className="icon" />
        </div>
      </div>

      <Card.Text>{blog.content}</Card.Text>

      <p>Last edited {getTimeDuration(blog.updatedAt)} ago</p>
    </Card.Body>
  </Card>
);
