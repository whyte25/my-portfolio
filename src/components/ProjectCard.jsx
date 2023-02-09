import React from "react";
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl, url }) {
  return (
    <Col sm={6} md={4}>
      <a
        href={`https://${url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <div
          className="proj-imgbx"
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description} </span>
          </div>
        </div>
      </a>
    </Col>
  );
}
