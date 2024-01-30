import { createBlog, getCategories, getUserDetails } from "@/api";
import useFetch from "@/hooks/useFetch";
import CreateBlogService from "@/services/CreateBlogService";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Container,
  Image,
  Navbar,
  OverlayTrigger,
  ProgressBar,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import SanityMobilePreview from "sanity-mobile-preview";
import "sanity-mobile-preview/dist/index.css?raw";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import ReactQuill from "react-quill";
import twitter from "@/assets/icons/Vector-1.png";
import facebook from "@/assets/icons/Vector.png";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select";
import { BsFillSendFill } from "react-icons/bs";
import NavigationBar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import { author } from "@/assets/images";
import MobileDevicePreview from "sanity-mobile-preview";
import Dropzone from "react-dropzone";
import { FiCloud } from "react-icons/fi";
import { addUser } from "@/redux/user/userSlice";
const CreateBlog = () => {
  const titleInputRef = useRef(null);
  const { data: categories, isLoading } = useFetch("categories", getCategories);
  const { accessToken, user } = useSelector((state) => state.user);
  const [isUploading, setIsUploading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useDispatch();
  const startSinulatedProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 50);
    return interval;
  };
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (categories) {
      const option = categories.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(option);
    }
  }, [categories]);

  const {
    handleAddImageButton,
    handleCategoryChange,
    handleCleanCurrentBlog,
    handleRemoveImage,
    handleSubmit,
    blog,
    handleImageChange,
    createBlogMutation,
    setBlog,
    selectedOptions,
  } = CreateBlogService();
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const { data: userData, refetch } = useFetch("me", getUserDetails);
  console.log(userData);

  useEffect(() => {
    if (!accessToken) {
      toast.error("Please sign In");
      navigate("/auth/signin");
    }
    if (userData && userData?.status === "suspended") {
      toast.error("Your suspended please check your email");
      navigate("/blog");
    }
  }, [accessToken]);
  const UploadDropZone = ({ linkIndex }) => {
    return (
      <Dropzone
        onDrop={async (acceptedFiles) => {
          setIsUploading(true);
          const progressInterval = startSinulatedProgress();

          await new Promise((resolve) => setTimeout(resolve, 3000));

          clearInterval(progressInterval);
          setUploadProgress(100);
          setIsUploading(false);

          handleImageChange(linkIndex, acceptedFiles[0]);
        }}
      >
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <div
            {...getRootProps()}
            className="border m-4"
            style={{ borderColor: "gray", borderRadius: "20px", height: "10rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <FiCloud size={30} />
              <p style={{ color: "#8888" }}>
                <span>Click to upload</span> or drag and rop
              </p>
            </div>
            {isUploading ? <ProgressBar now={uploadProgress} /> : null}
          </div>
        )}
      </Dropzone>
    );
  };

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["link", "image", "video", "code-block"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "script",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
  ];
  const postToolTip = (
    <Tooltip id="tooltip">
      <strong>publish post</strong>
    </Tooltip>
  );
  if (isLoading) {
    return <Spinner lg />;
  }
  console.log(uploadProgress);
  return (
    <>
      <Navbar className="d-flex justify-content-between align-items-center border mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            NORDIC ROSE
          </Navbar.Brand>
          <Button as={Link} to={"/blog"} className="" variant="outline">
            Back
          </Button>
        </Container>
      </Navbar>
      <Container>
        <section className="row gap-2">
          <div
            style={{ width: "40%", height: "80vh", position: "fixed", overflowY: "auto" }}
            className="col-md-5 d-none d-md-block p-0 bg-light sidebar"
          >
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-5">
              <div className="d-flex justify-content-between gap-5 align-items-center">
                <input
                  type="text"
                  ref={titleInputRef}
                  id="title"
                  placeholder="Title"
                  value={blog.title}
                  style={{
                    border: "none",
                    display: "block",
                    margin: "10px",
                    padding: "5px",

                    fontSize: "22px",
                  }}
                  onChange={(e) => setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }))}
                />

                <OverlayTrigger placement="top" overlay={postToolTip}>
                  <Button style={{ height: "100%", display: "block" }} variant="dark" type="submit">
                    {createBlogMutation.isLoading ? <Spinner md /> : <BsFillSendFill />}
                  </Button>
                </OverlayTrigger>
              </div>
              <div style={{ height: "20rem" }}>
                <ReactQuill
                  value={blog.content}
                  style={{ height: "200px" }}
                  onChange={(content) => setBlog((prevBlog) => ({ ...prevBlog, content }))}
                  modules={quillModules}
                  formats={quillFormats}
                />
              </div>

              <Select
                isMulti
                id="categories"
                options={options}
                value={options?.filter((option) => selectedOptions.includes(option.value))}
                onChange={handleCategoryChange}
              />

              {blog.files.map((file, linkIndex) => (
                <div key={linkIndex}>
                  {file.preview ? (
                    <div className="position-relative">
                      <div
                        className="image-container"
                        style={{ position: "relative", maxWidth: "400px", maxHeight: "400px" }}
                      >
                        <img
                          src={file.preview}
                          alt={`Preview ${linkIndex}`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="overlay"></div>
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(linkIndex)}
                          className="delete-button"
                        >
                          <h1 style={{ color: "white" }}>Remove</h1>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <UploadDropZone linkIndex={linkIndex} key={`image${linkIndex}`} />
                  )}
                </div>
              ))}

              <Button
                style={{ height: "100%", display: "block" }}
                variant="dark"
                onClick={handleAddImageButton}
              >
                Add Image
              </Button>
              <Button
                onClick={handleCleanCurrentBlog}
                style={{ height: "100%", display: "block" }}
                variant="danger"
              >
                Delete
              </Button>
            </form>
          </div>
          <div
            className="col-md-5 ms-sm-auto col-lg-10 position-relative"
            style={{ width: "50%", height: "100%" }}
          >
            <MobileDevicePreview
              preSelectedDevice={"iphone-x"}
              preSelectedColor={"gold"}
              showMenu={false}
              allowedDevices={["iphone-x"]}
            >
              <NavigationBar />
              <div className="d-flex justify-content-between align-items-center my-5 mx-4  ">
                <div className="d-flex justify-content-between align-items-center">
                  <Image
                    src={author}
                    alt="you"
                    width={50}
                    className="mx-4"
                    style={{ borderRadius: "50%" }}
                  />
                  <div>
                    <p className="font-weight-bold">{user.username}</p>
                    <p>
                      <span>{time} min read</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h1>{blog.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                {blog.files.length > 0 && (
                  <Carousel>
                    {blog.files.map((item) => (
                      <Carousel.Item interval={1000}>
                        <Card.Img
                          src={item.preview}
                          alt={`${item.name} images`}
                          style={{ objectFit: "cover", height: "300px" }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
                <div className="d-flex border gap-4 justify-content-around mx-5 align-items-center p-2">
                  <Image
                    as={Link}
                    to="/"
                    src={facebook}
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="mr-2"
                  />

                  <Image src={twitter} alt="Twitter" width={16} height={16} className="mr-2" />
                </div>
                Tags:
                {blog.categories.map((item, index) => (
                  <Link className="text-black mx-2" key={index}>
                    {item}
                  </Link>
                ))}
              </div>
              <Footer />
            </MobileDevicePreview>
          </div>
        </section>
      </Container>
    </>
  );
};

export default CreateBlog;
