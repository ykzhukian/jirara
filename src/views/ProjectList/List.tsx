const List = ({ projects, users }: {
  projects: Project[]
  users: User[]
}) => (
  <div className="project-list">
    <table>
      <tbody>
        <tr>
          <th>项目ID</th>
          <th>项目名</th>
          <th>负责人</th>
        </tr>
        {projects.map((p) => (
          <tr className="project-list__item" key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{users.find((u) => u.id === p.userId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default List;
