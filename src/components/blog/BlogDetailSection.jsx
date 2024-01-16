import React from "react";
import { Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import twitter from "@/assets/icons/Vector-1.png";
import facebook from "@/assets/icons/Vector.png";
const BlogDetailSection = ({ blog }) => {
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex ">
          <Image src={blog.authorImage} alt="author" roundedCircle className="mr-2 px-5" />
          <div>
            <p className="font-weight-bold">{blog.authorName}</p>
            <p>
              {blog.created_at} · <span>{blog.time_to_read} min read</span>
            </p>
          </div>
        </div>

        <div className="d-flex border gap-4 justify-content-center align-items-center p-2">
          <Image as={Link} src={twitter} alt="" width={16} height={16} className="mr-2" />
          <Image src={facebook} alt="" width={16} height={16} />
        </div>
      </div>
      <p>
        {blog.body
          ? blog.body.map((item, index) => (
              <>
                <div key={index} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                <Card className="mb-4" key={index}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    width={100}
                    height={500}
                    alt="Blog Cover"
                  />
                  <Card.Title className="text-center mt-3">{item.title}</Card.Title>
                </Card>
              </>
            ))
          : "Loading..."}
      </p>
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
        <Link className="m-0 text-dark">Share on Facebook</Link>

        <Image src={twitter} alt="Twitter" width={16} height={16} className="mr-2" />
        <Link className="m-0 text-dark">Share on Twitter</Link>
      </div>
      Tags:
      {blog.tags.map((item, index) => (
        <Link className="text-black mx-2" key={index}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default BlogDetailSection;
