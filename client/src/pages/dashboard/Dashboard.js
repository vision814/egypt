import React, { useState, useEffect } from "react";
import Error from "../../component/features/Error";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import ChartPyramid from "../../component/dashboard/chart/ChartPyramid";
import ChartPyramidMiddle from "../../component/dashboard/chartMiddle/ChartPyramidMiddle";
import axios from "axios";
import { useSelector } from "react-redux";
import ChartBar from "../../component/dashboard/chart/Chartbar";
import ChartBarMiddle from "../../component/dashboard/chartMiddle/ChartBarMiddle";
import ChartBarTotal from "../../component/dashboard/chart/ChartBarTotal";
import ChartBarMiddleTotal from "../../component/dashboard/chartMiddle/ChartBarMiddleTotal";
const Dashboard = () => {
  const [date, setDate] = useState("");
  const govs = [
    "القاهرة",
    "الجيزة",
    "الاسكندرية",
    "الدقهلية",

    "البحر الاحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الاسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادى الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بنى سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الاقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
  ];
  const [city, setCity] = useState("Egypt");
  const [err, setErr] = useState("");
  const [total, setTotal] = useState(true);
  const [dates, setDates] = useState([]);
  const [ind, setInd] = useState(Number(88000000));
  const [d, setD] = useState("");
  const [pop, setPop] = useState(Number(0));
  useEffect(() => {
    if (city == "Egypt") {
      setTotal(true);
    } else {
      setTotal(false);
    }
  }, [city]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get("/api/total/date");
        //console.log(res);
        setDates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);
  useEffect(() => {
    dates
      ?.filter((x) => x.date == date)
      ?.map((x) => {
        setInd(x.total);
      });
  }, [date]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        total: pop,
        date: d,
      };
      if (!d || !pop) {
        setErr("please enter date and total");
      } else {
        const res = await axios.post("/api/total/date", data);
        handleClose();
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/total/date/${id}`);
      alert("delete successed");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {err && <Error error={err} />}
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  value={d}
                  onChange={(e) => setD(e.target.value)}
                  type="text"
                  placeholder="Enter date"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Total Population</Form.Label>
                <Form.Control
                  value={pop}
                  onChange={(e) => setPop(e.target.value)}
                  type="number"
                  placeholder="Enter number of population"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>date</th>
                  <th>total population</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {dates?.map((d) => (
                  <tr>
                    <td>{d.date}</td>
                    <td>{d.total}</td>
                    <td
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => handleDelete(d._id)}
                    >
                      x
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Form.Select
          aria-label="Default select example"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Egypt">Egypt</option>
          {govs.map((dep) => (
            <option value={dep} style={{ fontWeight: "bold" }}>
              {dep}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          {dates?.map((dep) => (
            <option value={dep.date}>{dep.date}</option>
          ))}
        </Form.Select>

        <label style={{ width: "30%", marginTop: "8px" }}>
          Total Population:
        </label>
        <input
          type="number"
          value={ind}
          onChange={(e) => setInd(e.target.value)}
        />

        <>
          <div style={{ display: "flex" }}>
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ marginLeft: "10px" }}
            >
              Add
            </Button>
          </div>
          <div>
            <Button
              variant="secondary"
              onClick={handleShow1}
              style={{ marginLeft: "10px" }}
            >
              show
            </Button>
          </div>
        </>
      </div>

      {total ? (
        <>
          <Row style={{ marginTop: "10px" }}>
            <Col sm={4}>
              <Card style={{ padding: "10px" }}>
                <ChartBar
                  ind={ind}
                  setInd={setInd}
                  city={city}
                  date={date}
                  setDate={setDate}
                />
              </Card>
              <Card style={{ padding: "10px", marginTop: "10px" }}>
                <ChartBarTotal
                  ind={ind}
                  setInd={setInd}
                  city={city}
                  date={date}
                  setDate={setDate}
                />
              </Card>
            </Col>
            <Col sm={8}>
              <Card
                style={{
                  padding: "10px",
                }}
              >
                <ChartPyramid
                  ind={ind}
                  setInd={setInd}
                  city={city}
                  date={date}
                  setDate={setDate}
                />
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row style={{ position: "relative", marginTop: "10px" }}>
            <Col sm={4}>
              <Card style={{ padding: "10px" }}>
                <ChartBarMiddle
                  ind={ind}
                  setInd={setInd}
                  city={city}
                  date={date}
                  setDate={setDate}
                />
              </Card>
              <Card style={{ padding: "10px", marginTop: "10px" }}>
                <ChartBarMiddleTotal
                  ind={ind}
                  setInd={setInd}
                  city={city}
                  date={date}
                  setDate={setDate}
                />
              </Card>
            </Col>
            <Col sm={8}>
              <Card
                style={{
                  padding: "10px",
                }}
              >
                <ChartPyramidMiddle
                  ind={ind}
                  setInd={setInd}
                  city={city}
                  date={date}
                  setDate={setDate}
                />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
