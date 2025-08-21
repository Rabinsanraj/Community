export function Growingcommunity(props) {
  return (
    <div
      className="col-10 col-md-6 col-lg-2 text-center mb-4"
      style={{
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "#fff7f7ff",
        boxShadow: "0 3px 12px rgba(0, 0, 0, 0.66)",
      }}
    >
      <span
        className="d-inline-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#c41d00",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          color: "white",
          fontSize: "30px",
        }}
      >
        {props.icon}
      </span>
      <p className="fs-2 mt-2 fw-bold">{props.number}</p>
      <p className="fs-6 fw-bold">{props.text}</p>
    </div>
  );
}
// --------------------------------------------------------------------------
export function Weoffer(props) {
  return (
    <div
      className="col-10 col-md-6 col-lg-3 mb-4"
      style={{
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "#fff2f2ff",
        boxShadow: "0 -5px 0px 0px #e42503ff",
      }}
    >
      <span className="fs-1" style={{ color: "#e42503ff" }}>
        {props.icon}
      </span>
      <p className="fs-6 mt-2 text-dark fw-bold">{props.headtext}</p>
      <p className="text-left fs-6">{props.subtext}</p>
    </div>
  );
}
// --------------------------------------------------------------------------
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export function Upcommingevents(props) {
  return (
    <div
      className="col-10 col-md-6 col-lg-3 mb-4"
      style={{
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#deffe1ff",
        boxShadow: "0 0px 12px rgba(0, 0, 0, 0.66)",
      }}
    >
      <img
        src={props.image}
        alt="This is an image"
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
      <ul className="list-unstyled py-3 mb-0">
        <li className="fs-6 py-2 mt-2 text-dark fw-bold">{props.eventname}</li>
        <li className="text-left py-1">
          <MdOutlineDateRange /> {props.eventdate}
        </li>
        <li className="text-left py-1">
          <IoLocationOutline /> {props.eventlocation}
        </li>
      </ul>
    </div>
  );
}
