import React from "react";
import { Image, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import twitter from "@/assets/icons/Vector-1.png";
import facebook from "@/assets/icons/Vector.png";
import { author } from "@/assets/images";
import getTimeDuration from "@/helper/getTimeDuration";
const BlogDetailSection = ({ blog }) => {
  console.log("blog", blog);
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex ">
          <Image src={author} alt="author" roundedCircle className="mr-2 px-5" />
          <div>
            <p className="font-weight-bold">{blog.created_by.username}</p>
            <p>
              {getTimeDuration(blog.createdAt)} ago · <span>{blog.time_to_read} min read</span>
            </p>
          </div>
        </div>

        <div className="d-flex border gap-4 justify-content-center align-items-center p-2">
          <Image as={Link} src={twitter} alt="" width={16} height={16} className="mr-2" />
          <Image src={facebook} alt="" width={16} height={16} />
        </div>
      </div>
      <Card className="mb-4">
        <Card.Title className="text-center mt-3">{blog.title}</Card.Title>
      </Card>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      <Carousel>
        {blog.url_list.map((item) => (
          <Carousel.Item interval={1000}>
            <Card.Img
              src={item.link}
              alt={`${item.name} images`}
              style={{ objectFit: "cover", height: "300px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
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
      {blog.categories.map((item, index) => (
        <Link className="text-black mx-2" key={index}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default BlogDetailSection;
