import { useState } from 'react';
import SearchPanel from './SearchPanel';
import List from './List';

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div>
      <SearchPanel setProjects={setProjects} setUsers={setUsers} users={users} />
      <List projects={projects} users={users} />
    </div>
  );
};

export default ProjectList;
