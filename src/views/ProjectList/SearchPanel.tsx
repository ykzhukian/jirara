import { useState } from 'react';
import * as qs from 'qs';
import { cleanObject, useMount, useDebounce } from '../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

const SearchPanel = ({ setProjects, setUsers, users }: {
  setProjects: (val: Project[]) => void
  setUsers: (val: User[]) => void
  users: User[]
}) => {
  const [params, setParams] = useState({
    name: '',
    userId: '',
  });

  useDebounce(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(cleanObject(params))}`).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    });
  }, 1000);

  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    });
  });

  return (
    <div className="search-panel">
      <input type="text" value={params.name} onChange={(evt) => setParams({ ...params, name: evt.target.value })} placeholder="project" />
      <select name="user" id="user-select" onChange={(evt) => setParams({ ...params, userId: evt.target.value })} value={params.userId}>
        <option value="" disabled>请选择</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchPanel;
