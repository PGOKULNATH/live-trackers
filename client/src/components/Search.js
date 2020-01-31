import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import AlertContext from '../context/alert/alertContext';
import Alerts from './Alert';

const Search = () => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { loadUser, user, error, clearErrors } = userContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (error === 'Invalid Solider') {
      setAlert('Invalid Soldier', 'danger');
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error]);

  const [id, setId] = useState('');

  const submit = async e => {
    e.preventDefault();
    loadUser(id);
    setId('');
  };

  return (
    <div className='container'>
      <div className='row my-2'>
        <form className='col-12' onSubmit={submit}>
          <div className='form-group row'>
            <div className='col-9'>
              <input
                className='form-control col-12'
                value={id}
                required
                placeholder='Enter the Id here...'
                onChange={e => setId(e.target.value)}
                type='text'
              />
            </div>
            <button className='btn btn-primary btn-block col-3'>Search</button>
          </div>
        </form>
      </div>
      <Alerts />
      <div className='container'>
        <div className='d-md-flex justify-content-center'>
          {user !== null && (
            <div className='card1 text-light'>
              <table className='ml-5'>
                <tbody>
                  <tr>
                    <th>Id</th>
                    <td>{user.id}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th className='pr-2'>Email </th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>{user.age}</td>
                  </tr>
                  <tr>
                    <th>Batch</th>
                    <td>{user.batch}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {user !== null && (
            <div className='card1 text-light'>
              <table className='ml-5'>
                <tbody>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{user.dob}</td>
                  </tr>
                  <tr>
                    <th>Blood Group</th>
                    <td>{user.blood}</td>
                  </tr>
                  <tr>
                    <th className='pr-2'>Specialisation </th>
                    <td>{user.spec}</td>
                  </tr>
                  <tr>
                    <th>Experience</th>
                    <td>{user.experience}</td>
                  </tr>
                  <tr>
                    <th>Designation</th>
                    <td>{user.designation}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className='d-md-flex justify-content-center'>
          {user !== null && user.injury.length > 0 && (
            <div className='card1 text-light'>
              <div className='card-header'>
                <h4>Injuries</h4>
              </div>
              <ul className='ml-3'>
                {user.injury.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
