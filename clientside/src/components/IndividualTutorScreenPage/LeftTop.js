import React from "react";
import { Link } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PlaceIcon from "@material-ui/icons/Place";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

function LeftTop({ tutorInfo }) {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <Link to='' className='fancybox'>
          <br />
          <img
            className='img-fluid'
            src={tutorInfo.image}
            alt='Md.Emrul kayes Ikbal'
            width='150px'
          />
        </Link>{" "}
        <br />
        <font className='tutorSceen__subHeading' size='2'>
          <strong>Member Since:</strong>{" "}
          {tutorInfo.basic_info.reg_time.member_since}
          <strong>
            {" "}
            <br /> last Login:
          </strong>{" "}
          {tutorInfo.basic_info.reg_time.last_login}
        </font>
        <div className='tutorScreen__photo__tag'>
          <h7>
            {" "}
            <font color='white'>
              {" "}
              <strong>{tutorInfo.type} TUTOR</strong>{" "}
            </font>{" "}
          </h7>
        </div>
        <div className='addthis_sharing_toolbox space-htop'> </div>
      </div>
      <div className='col-md-8'>
        <h6>
          <strong>
            <font color='#006699'> {tutorInfo.name} </font>
            {tutorInfo.type === "Platinum" && (
              <StarIcon style={{ fill: "#ff9800", fontSize: "30px" }} />
            )}
            {tutorInfo.type === "Gold" && (
              <StarHalfIcon style={{ fill: "#ff9800", fontSize: "30px" }} />
            )}
            {tutorInfo.type === "Silver" && (
              <StarOutlineIcon style={{ fill: "#ff9800", fontSize: "30px" }} />
            )}{" "}
          </strong>
        </h6>
        <br />
        <h6>
          {" "}
          <strong className='tutorSceen__subHeading'>ID #</strong>{" "}
          <strong>{tutorInfo._id} </strong>{" "}
        </h6>
        <strong className='tutorSceen__subHeading'>Experience: </strong>
        Hello, I am one who has a lot of experience with tuition. I have done
        this job from my H.S.C period. I have taken the className in different
        coaching centers which are classNamees 1 to 10. If you come to me I will
        try my best.
        <br /> <br />
        <LocalMallIcon
          style={{ fill: "#795548" }}
          className='tutorScreen__icon'
        />
        <strong className='tutorSceen__subHeading'>Qualification:</strong>{" "}
        {tutorInfo.basic_info.qualification} <br />
        <PlaceIcon style={{ fill: "#795548" }} className='tutorScreen__icon' />
        <strong className='tutorSceen__subHeading'>Area Covered:</strong>{" "}
        <strong style={{ fontWeight: "800" }}>
          {" "}
          {tutorInfo.tution_info.preffered_area.distict}{" "}
        </strong>{" "}
        ({" "}
        <font size='1'>
          {" "}
          {tutorInfo.tution_info.preffered_area.area.map(
            (place) => `${place},`
          )}{" "}
        </font>{" "}
        ) <br />
        <LocalLibraryIcon
          style={{ fill: "#795548" }}
          className='tutorScreen__icon'
        />
        <strong className='tutorSceen__subHeading'>Teaching:</strong>
        <font style={{ color: "#bd4b4b", fontWeight: "500" }}>
          {tutorInfo.tution_info.preffered_subject.map(
            (subject) => `${subject},`
          )}
        </font>
        <br />
        <PhoneAndroidIcon
          style={{ fill: "#795548" }}
          className='tutorScreen__icon'
        />
        <strong className='tutorSceen__subHeading'>Phone:</strong>
        <font style={{ fontWeight: "800" }}>{tutorInfo.basic_info.phone}</font>
        <Link
          to=''
          className='fancytip'
        ></Link>{" "}
        <br />
        <EmailIcon style={{ fill: "#795548" }} className='tutorScreen__icon' />
        <strong className='tutorSceen__subHeading'>Email:</strong>{" "}
        {tutorInfo.basic_info.email}
        <Link
          to=''
          style={{
            cursor: "pointer",
          }}
          className='fancytip'
        ></Link>
        <br /> <br />
      </div>
    </div>
  );
}

export default LeftTop;
