export function TeacherCard({ data }) {
  const styles = { width: "25%" };
  return (
    <div style={styles}>
      <img src={data.img} alt={data.name} width="150px" height="150px" />
      <div>
        <h1 className="teacherName">{data.name} Sir/Ma'am</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0px",
          }}
        >
          <h4 style={{ margin: "0px" }}>{data.subject}</h4>
          <h4 style={{ margin: "0px" }}>{data.experience}</h4>
        </div>
        <p className="teacherDesc">{data.desc}</p>
      </div>
    </div>
  );
}
