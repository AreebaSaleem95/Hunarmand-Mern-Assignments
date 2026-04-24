import DataCard from "./DataCard";

function DataList({ users }) {
  return (
    <div className="data-list">
      {users.map((user) => (
        <DataCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default DataList;
