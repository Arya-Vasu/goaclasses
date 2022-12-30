import { CourseCards } from "./CourseCards";

export function Courses() {
  const courseList = [
    {
      name: "Course A",
      duration: "3 months",
      starts: "Feb. 1st, 2023",
      timing: "9AM to 12PM",
      fees: "Rs. XXXX.00",
      batch: "Week Days",
      pic: "https://m.media-amazon.com/images/I/71sIv2hWoXL.jpg",
    },
    {
      name: "Course B",
      duration: "3 months",
      starts: "Feb. 1st, 2023",
      timing: "1PM to 4PM",
      fees: "Rs. XXXX.00",
      batch: "Week Days",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpwkoXCL61431WRRYPjQAauXlTDcL057Xkg&usqp=CAU",
    },
    {
      name: "Course C",
      duration: "6 months",
      starts: "Feb. 1st, 2023",
      timing: "9AM to 1PM",
      fees: "Rs. XXXX.00",
      batch: "Weekend",
      pic: "https://lalchowk.in/lalchowk/pictures/1003280.jpg",
    },
    {
      name: "Course D",
      duration: "6 months",
      starts: "Feb. 1st, 2023",
      timing: "9AM to 1PM",
      fees: "Rs. XXXX.00",
      batch: "Weekend",
      pic: "https://m.media-amazon.com/images/I/51AZvQdmI5L.jpg",
    },
  ];

  return courseList.map((data, index) => (
    <CourseCards data={data} index={index} />
  ));
}
