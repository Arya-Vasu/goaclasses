export function CourseCards({ data, index }) {
  const style1 = { flexDirection: "row" };
  const style2 = { flexDirection: "row-reverse" };
  const style3 = {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  };
  const styles = { margin: 0 };
  return (
    <div style={index % 2 === 0 ? style1 : style2} className="mainCourseDiv">
      <div className="courseDetails">
        <h2>{data.name}</h2>
        <p style={styles}>
          <strong>Starting: </strong>
          {data.starts}
        </p>
        <p style={styles}>
          <strong>Duration: </strong>
          {data.duration}
        </p>
        <p style={styles}>
          <strong>Class Timings: </strong>
          {data.timing}
        </p>
        <div style={style3}>
          <p>
            <strong>{data.batch}</strong>
          </p>
          <p>
            <strong>{data.fees}</strong>
          </p>
        </div>
      </div>
      <div className="courseImage">
        <img src={data.pic} alt={data.name} height="250" width="190" />
      </div>
    </div>
  );
}
