function DataCard({ user }) {
  return (
    <div className="data-card">
      <h3 className="card-name">{user.name}</h3>
      <p className="card-email">
        <span className="label">Email:</span> {user.email}
      </p>
      <p className="card-phone">
        <span className="label">Phone:</span> {user.phone}
      </p>
      <p className="card-company">
        <span className="label">Company:</span> {user.company?.name ?? "N/A"}
      </p>
    </div>
  );
}

export default DataCard;
