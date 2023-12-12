import React from "react";
import { Row, Figure } from "react-bootstrap";
import { HeroSectionMock } from "@/utils/blog";
import styled from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className="   d-flex flex-column hero-section p-4  ">
      <div className="border-bottom border-black p-2">
        <img src={HeroSectionMock.image} class=" mx-auto d-block" alt="..." />
        <h1 className={styled.title}>{HeroSectionMock.title}</h1>
        <p className={styled.body}>{HeroSectionMock.body}</p>
      </div>
    </section>
  );
};

export default HeroSection;
