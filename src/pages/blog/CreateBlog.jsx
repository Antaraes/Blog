import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const { accessToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      toast.error("Please sign In");
      navigate("/auth/signin");
    }
  }, [accessToken]);
  const [value, setValue] = useState("");
  const [linkForm, setLinkForm] = useState([
    {
      Title: "",
      Content: "",
      links: [
        {
          link: "",
          uploadType: "",
          preview: null,
        },
      ],
    },
  ]);

  const handleAddButton = () => {
    setLinkForm((prevLinkForm) => [
      ...prevLinkForm,
      {
        Title: "",
        Content: "",
        links: [
          {
            link: "",
            uploadType: "",
            preview: null,
          },
        ],
      },
    ]);
  };
  const handleRmoveSection = (sectionIndex) => {
    setLinkForm((prevForm) => {
      const newLinkForm = [...prevForm];
      newLinkForm.splice(sectionIndex, 1);
      return newLinkForm;
    });
  };

  const handleAddLinkButton = (sectionIndex) => {
    setLinkForm((prevLinkForm) => {
      const newLinkForm = [...prevLinkForm];
      newLinkForm[sectionIndex].links.push({
        link: "",
        uploadType: "",
      });
      return newLinkForm;
    });
  };
  const handleRemoveLinkButton = (sectionIndex, linkIndex) => {
    setLinkForm((prevLinkForm) => {
      const newLinkForm = [...prevLinkForm];
      newLinkForm[sectionIndex].links.splice(linkIndex, 1);
      return newLinkForm;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(linkForm);
  };
  const toolbarOptions = [
    ["bold", "italic"],
    ["link", "image"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  const handleImageChange = (sectionIndex, linkIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLinkForm((prevLinkForm) => {
          const newLinkForm = [...prevLinkForm];
          newLinkForm[sectionIndex].links[linkIndex].link = file;
          newLinkForm[sectionIndex].links[linkIndex].preview = reader.result;
          return newLinkForm;
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ReactQuill modules={module} value={value} onChange={setValue} />
        {linkForm.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <label htmlFor={`no${sectionIndex}`}>No:</label>
            <input
              type="text"
              name={`no${sectionIndex}`}
              value={section.no}
              onChange={(e) => {
                const newLinkForm = [...linkForm];
                newLinkForm[sectionIndex].no = e.target.value;
                setLinkForm(newLinkForm);
              }}
            />
            <label htmlFor={`size${sectionIndex}`}>Size:</label>
            <input
              type="text"
              name={`size${sectionIndex}`}
              value={section.size}
              onChange={(e) => {
                const newLinkForm = [...linkForm];
                newLinkForm[sectionIndex].size = e.target.value;
                setLinkForm(newLinkForm);
              }}
            />
            <button type="button" onClick={() => handleRmoveSection(sectionIndex)}>
              Remove Section
            </button>

            {section.links.map((link, linkIndex) => (
              <div key={linkIndex}>
                <label htmlFor={`link${sectionIndex}_${linkIndex}`}>Image:</label>
                <input
                  type="file"
                  name={`link${sectionIndex}_${linkIndex}`}
                  onChange={(e) => handleImageChange(sectionIndex, linkIndex, e)}
                />
                {link.preview && (
                  <img
                    src={link.preview}
                    alt={`Preview ${linkIndex}`}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                )}
                <label htmlFor={`uploadType${sectionIndex}_${linkIndex}`}>Upload Type:</label>
                <input
                  type="text"
                  name={`uploadType${sectionIndex}_${linkIndex}`}
                  value={link.uploadType}
                  onChange={(e) => {
                    const newLinkForm = [...linkForm];
                    newLinkForm[sectionIndex].links[linkIndex].uploadType = e.target.value;
                    setLinkForm(newLinkForm);
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveLinkButton(sectionIndex, linkIndex)}
                >
                  Remove Link
                </button>
              </div>
            ))}

            <button type="button" onClick={() => handleAddLinkButton(sectionIndex)}>
              Add Link
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddButton}>
          Add Section
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
