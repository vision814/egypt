import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HouseIcon from "@mui/icons-material/House";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaidIcon from "@mui/icons-material/Paid";
import SportsIcon from "@mui/icons-material/Sports";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import popImg from "../../img/population.png";
import eduImg from "../../img/edu.png";
import childImg from "../../img/child.png";
import culImg from "../../img/culture.png";
import envImg from "../../img/env.png";
import azhar from "../../img/azhar1.jpg";
import workImg from "../../img/manpower.png";
const Category = () => {
  return (
    <Container className="categories">
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>فئات السن</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link to="/ages" style={{ marginTop: "10px", color: "gray" }}>
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/4753/4753175.png"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>السكان في منتصف العام</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/pop-middle-year"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://cdn.elmostaqbal.com/wp-content/uploads/2019/07/www.elmostaqbal.com_2019-07-11_10-18-45_256965.jpg"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>السكان</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/population"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>

                  <img src={popImg} style={{ width: "90px", height: "70px" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>المؤهلات التعليمية</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/qualifications"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/256/qualification-history-icon.png"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>اتصال المساكن بالمرافق</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/house"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM46xfvqrCXcT1nkw9cUMVsc5lq_5IusV7GmBYCUy9gyQLqHS6sNJmUwZh8COm97sokU&usqp=CAU"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>الحالة الزواجية</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/status"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={"https://drmpcc.com/images/services04.png"}
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>
                بيانات الاسر وعدد الافراد وعدد الحجرات و متوسط افراد الاسر
              </h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/family"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://w7.pngwing.com/pngs/376/153/png-transparent-family-computer-icons-house-t-rx-pharmacy-parent-family-child-text-people.png"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>
                تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى
              </h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/grade"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://icons.veryicon.com/png/128/business/domain-icon/national-accounts.png"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>
                جملة من التحق وتسرب من التعليم 4 سنوات فاكثر
              </h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/total"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://miro.medium.com/max/512/0*8xjI0wdpyf0VAoiJ.png"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col></Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>اسباب التسرب من التعليم</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/edu/dropout-cases"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://www.unicef.org/mena/sites/unicef.org.mena/files/styles/large/public/2019-03/icons-02.png?itok=ahiY1-h_"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <h6 style={{ fontWeight: "bold" }}>التسرب من التعليم بالسن</h6>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/edu/dropout"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://cdn1.iconfinder.com/data/icons/education-colored-icons-vol-2/128/078-512.png"
                    }
                    style={{ width: "90px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
