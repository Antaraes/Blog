import { createBlog, getCategories } from "@/api";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const CreateBlogService = () => {
  const titleInputRef = useRef(null);

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    categories: [],
    files: [
      {
        link: "",
        preview: null,
      },
    ],
    time_to_read: "",
  });
  const wpm = 225;
  console.log(blog);

  const createBlogMutation = useMutation(createBlog, {
    onSuccess: (data) => {
      setBlog({
        title: "",
        content: "",
        categories: [],
        files: [
          {
            link: "",
            preview: null,
          },
        ],
        time_to_read: "",
      });
      toast.success(data.data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  const handleAddImageButton = () => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      files: [
        ...prevBlog.files,
        {
          link: "",
          preview: null,
        },
      ],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(blog);
    const formData = new FormData();
    const words = blog.content.trim().split(/\s+/).length;
    const timeToRead = Math.ceil(words / wpm);

    formData.append("title", blog.title);
    formData.append("content", blog.content);

    blog.categories.forEach((category, categoryIndex) => {
      formData.append(`categories`, category);
    });

    blog.files.forEach((file, fileIndex) => {
      formData.append(`files`, file.link);
    });
    formData.append("time_to_read", timeToRead);

    await createBlogMutation.mutateAsync(formData);
  };

  const handleCategoryChange = (selectedCategories) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      categories: selectedCategories ? selectedCategories.map((category) => category.value) : [],
    }));
  };

  const handleImageChange = (linkIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog((prevBlog) => ({
          ...prevBlog,
          files: [
            ...prevBlog.files,
            {
              link: file,
              preview: reader.result,
            },
          ],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (linkIndex) => {
    setBlog((prevBlog) => {
      const newFiles = [...prevBlog.files];
      newFiles.splice(linkIndex, 1);
      return { ...prevBlog, files: newFiles };
    });
  };
  const handleCleanCurrentBlog = () => {
    setBlog({
      title: "",
      content: "",
      categories: [],
      files: [
        {
          link: "",
          preview: null,
        },
      ],
      time_to_read: "",
    });
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };
  return {
    blog,
    setBlog,
    createBlogMutation,
    handleAddImageButton,
    handleRemoveImage,
    handleCleanCurrentBlog,
    handleCategoryChange,
    handleSubmit,
    handleImageChange,
  };
};

export default CreateBlogService;
