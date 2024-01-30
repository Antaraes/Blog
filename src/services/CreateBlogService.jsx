import { createBlog, getCategories } from "@/api";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const CreateBlogService = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
      navigate("/blog");
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
  const handleCategoryChange = (selectedValues) => {
    const selectedIds = selectedValues ? selectedValues.map((option) => option.value) : [];
    setSelectedOptions(selectedIds);
    setBlog((prevBlog) => ({
      ...prevBlog,
      categories: selectedIds,
    }));
  };

  // const handleCategoryChange = (selectedCategories) => {
  //   setBlog((prevBlog) => ({
  //     ...prevBlog,
  //     categories: selectedCategories ? selectedCategories.map((category) => category.value) : [],
  //   }));
  // };

  const handleImageChange = (linkIndex, file) => {
    // const file = event.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setBlog((prevBlog) => ({
    //       ...prevBlog,
    //       files: [
    //         ...prevBlog.files,
    //         {
    //           link: file,
    //           preview: reader.result,
    //         },
    //       ],
    //     }));
    //   };
    //   reader.readAsDataURL(file);
    // }
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlog((prevBlog) => {
        const updatedFiles = [...prevBlog.files];
        updatedFiles[linkIndex] = {
          link: file,
          preview: reader.result,
        };
        return {
          ...prevBlog,
          files: updatedFiles,
        };
      });
    };
    reader.readAsDataURL(file);
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
    selectedOptions,
    handleCategoryChange,
    handleSubmit,
    handleImageChange,
  };
};

export default CreateBlogService;
