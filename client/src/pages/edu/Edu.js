import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Education = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "right", color: "grey" }}>
      <Typography variant="h4">التعليم</Typography>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px", height: "100%" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "50px" }}>
              التسرب من التعليم بالسن
            </Card.Title>
            <Link
              to="/primary"
              style={{ textDecoration: "none", fontSize: "50px" }}
            >
              المرحلة الابتدائية
            </Link>
            <Link
              to="/secondary"
              style={{ textDecoration: "none", fontSize: "50px" }}
            >
              المرحلة الاعدادية
            </Link>
            <Link
              to="/high"
              style={{ textDecoration: "none", fontSize: "50px" }}
            >
              المرحلة الثانوية
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
