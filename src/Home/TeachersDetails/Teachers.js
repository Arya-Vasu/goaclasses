import { useState } from "react";
import { TeacherCard } from "./TeacherCard";

export function Teachers() {
  const teachersArray = [
    {
      name: "Teacher 1",
      img: "https://play-lh.googleusercontent.com/ugdg7z1E6R3I9X8KkaKDCA3rSBCTdCxNAuV_oQz9q5iBYgAhdMqv3yy-8PVb7svFsQ",
      subject: "Subject 1",
      experience: "XX Yrs.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Teacher 2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzh-apaEjabrwCAQRc0yHum4WKeCGr7Hi5gw&usqp=CAU",
      subject: "Subject 2",
      experience: "XX Yrs.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Teacher 3",
      subject: "Subject 3",
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/20494869.543ce3cfc2f83.jpg",
      experience: "XX Yrs.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Teacher 4",
      img: "https://t4.ftcdn.net/jpg/03/66/58/61/360_F_366586162_5GX58ADxcogBOdCV9TfZIP7nGoIc3q7z.jpg",
      subject: "Subject 4",
      experience: "XX Yrs.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Teacher 5",
      img: "https://ih1.redbubble.net/image.4307280028.9756/st,small,507x507-pad,600x600,f8f8f8.jpg",
      subject: "Subject 5",
      experience: "XX Yrs.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextTeacher = () => {
    setCurrent(current === teachersArray.length - 3 ? 0 : current + 1);
  };
  const previousTeacher = () => {
    setCurrent(current === 0 ? teachersArray.length - 3 : current - 1);
  };
  const styles10 = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const testArray = [teachersArray[current], teachersArray[current + 1], teachersArray[current + 2]];

  return (
    <div style={styles10}>
      <button
        className="backButton1"
        onClick={() => {
          current === 0 ? setCurrent(0) : previousTeacher();
        }}
      >
        Prev
      </button>
      {/* <TeacherCard data={teachersArray[current]} />
            <TeacherCard data={teachersArray[current + 1]} />
            <TeacherCard data={teachersArray[current + 2]} /> */}
      {testArray.map((data, index) => <TeacherCard data={data} />)}
      <button
        className="forwardButton1"
        onClick={() => {
          current === teachersArray.length - 3
            ? setCurrent(teachersArray.length - 3)
            : nextTeacher();
        }}
      >
        Next
      </button>
    </div>
  );
}
