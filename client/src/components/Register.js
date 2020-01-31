import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import AlertContext from '../context/alert/alertContext';
import Alerts from './Alert';

const Register = () => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const {
    register,
    error,
    loadUser,
    updateUser,
    deleteUser,
    user,
    clearErrors,
    addInjury,
    deleteInjury
  } = userContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (
      error === 'Register Success' ||
      error === 'Update Success' ||
      error === 'Delete Success' ||
      error === 'Injury Added' ||
      error === 'Injury Deleted'
    ) {
      setAlert(error, 'success');
      setTimeout(() => {
        clearErrors();
      }, 5000);
    }
    if (user !== null) {
      setUpdate({
        id: user.id,
        name: user.name,
        email: user.email,
        batch: user.batch,
        dob: user.dob,
        blood: user.blood,
        age: user.age,
        spec: user.spec,
        experience: user.experience,
        designation: user.designation
      });
      if (error === 'Invalid Solider') {
        setAlert('Invalid Soldier', 'danger');
        setTimeout(() => {
          clearErrors();
        }, 1000);
      }
    }
    //eslint-disable-next-line
  }, [error, user]);

  const [users, setUser] = useState({
    id: '',
    name: '',
    email: '',
    batch: '',
    dob: '',
    blood: '',
    injury: '',
    age: '',
    spec: '',
    experience: '',
    designation: ''
  });

  const [update, setUpdate] = useState({
    id: '',
    name: '',
    email: '',
    batch: '',
    dob: '',
    blood: '',
    age: '',
    spec: '',
    experience: '',
    designation: ''
  });

  const [delete_id, setDelete] = useState('');

  const [injuries, setInjury] = useState({
    id: '',
    injury: ''
  });

  const [injury_delete, setInjury_delete] = useState({
    id: '',
    injury_id: ''
  });

  const submit = e => {
    e.preventDefault();
    const formData = {};
    formData.id = users.id;
    formData.name = users.name;
    formData.email = users.email;
    formData.batch = users.batch;
    formData.dob = users.dob;
    formData.blood = users.blood;
    formData.injury = users.injury;
    formData.age = users.age;
    formData.spec = users.spec;
    formData.experience = users.experience;
    formData.designation = users.designation;
    register(formData);
    setUser({
      id: '',
      name: '',
      email: '',
      batch: '',
      dob: '',
      blood: '',
      injury: '',
      age: '',
      spec: '',
      experience: '',
      designation: ''
    });
  };
  const submit_update = e => {
    e.preventDefault();
    const formData = {};
    formData.id = update.id;
    formData.name = update.name;
    formData.email = update.email;
    formData.batch = update.batch;
    formData.dob = update.dob;
    formData.blood = update.blood;
    formData.age = update.age;
    formData.spec = update.spec;
    formData.experience = update.experience;
    formData.designation = update.designation;
    updateUser(formData);
    setUpdate({
      id: '',
      name: '',
      email: '',
      batch: '',
      dob: '',
      blood: '',
      age: '',
      spec: '',
      experience: '',
      designation: ''
    });
  };

  const submit_delete = e => {
    e.preventDefault();
    deleteUser(delete_id);
    setDelete('');
  };

  const submitInjury = e => {
    e.preventDefault();
    const formData = {};
    formData.id = injuries.id;
    formData.injury = injuries.injury;
    addInjury(formData);
    setInjury({
      id: '',
      injury: ''
    });
  };

  const submitInjury_delete = e => {
    e.preventDefault();
    const formData = {};
    formData.id = injury_delete.id;
    formData.injury_id = injury_delete.injury_id - 1;
    deleteInjury(formData);
    setInjury_delete({
      id: '',
      injury_id: ''
    });
  };

  return (
    <div className='container'>
      <div className='d-md-flex justify-content-center'>
        <div className='card1'>
          <div className='card-header'>
            <h3 className='text-light'>Register</h3>
            {error === 'Register Success' && <Alerts />}
          </div>
          <div className='card-body'>
            <form onSubmit={submit}>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Id</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Id'
                    value={users.id}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        id: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Name</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    value={users.name}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        name: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Email</label>
                <div className='col-10'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    value={users.email}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        email: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Batch</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Batch'
                    value={users.batch}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        batch: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>DOB</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Date of Birth'
                    value={users.dob}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        dob: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Blood</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Blood Group'
                    value={users.blood}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        blood: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Injury</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Injury'
                    value={users.injury}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        injury: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Age</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Age'
                    value={users.age}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        age: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Spec</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Specialisation'
                    value={users.spec}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        spec: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Exp</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Experience'
                    value={users.experience}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        experience: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Desig</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Designation'
                    value={users.designation}
                    required
                    onChange={e =>
                      setUser({
                        ...users,
                        designation: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  value='Register'
                  className='btn btn-primary btn-block text-light float-right'
                />
              </div>
            </form>
          </div>
        </div>
        <div className='card1'>
          <div className='card-header'>
            <h3 className='text-light'>Update</h3>
            {error === 'Update Success' ||
              (error === 'Invalid Solider' && <Alerts />)}
          </div>
          <div className='card-body'>
            <form onSubmit={submit_update}>
              <div className='row form-group'>
                <label className='form-label col-2 text-light h4'>Id</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Id'
                    value={update.id}
                    required
                    onChange={e => {
                      setUpdate({
                        ...update,
                        id: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
              <div className='form-group'>
                <button
                  type='button'
                  className='btn btn-block text-light'
                  style={{ background: '#00089c' }}
                  onClick={() => {
                    loadUser(update.id);
                  }}
                >
                  Ok
                </button>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Name</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    value={update.name}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        name: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Email</label>
                <div className='col-10'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    value={update.email}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        email: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Batch</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Batch'
                    value={update.batch}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        batch: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>DOB</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Date of Birth'
                    value={update.dob}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        dob: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Blood</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Blood Group'
                    value={update.blood}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        blood: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Age</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Age'
                    value={update.age}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        age: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Spec</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Specialisation'
                    value={update.spec}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        spec: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Exp</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Experience'
                    value={update.experience}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        experience: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='row form-group'>
                <label className='form-label col-2 text-light'>Desig</label>
                <div className='col-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Designation'
                    value={update.designation}
                    required
                    onChange={e =>
                      setUpdate({
                        ...update,
                        designation: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  value='Update'
                  className='btn btn-warning btn-block text-light float-right'
                />
              </div>
            </form>
          </div>
        </div>
        <div className='card1'>
          <div className='card2'>
            <div className='card-header'>
              <h3 className='text-light'>Add Injury</h3>
              {error === 'Injury Added' && <Alerts />}
            </div>
            <div className='card-body'>
              <form onSubmit={submitInjury}>
                <div className='input-group form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Id'
                    value={injuries.id}
                    required
                    onChange={e =>
                      setInjury({
                        ...injuries,
                        id: e.target.value
                      })
                    }
                  />
                </div>
                <div className='input-group form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Injury'
                    value={injuries.injury}
                    required
                    onChange={e =>
                      setInjury({
                        ...injuries,
                        injury: e.target.value
                      })
                    }
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Add'
                    className='btn btn-success btn-block text-light float-right'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='card2'>
            <div className='card-header'>
              <h3 className='text-light'>Delete Injury</h3>
              {error === 'Injury Deleted' && <Alerts />}
            </div>
            <div className='card-body'>
              <form onSubmit={submitInjury_delete}>
                <div className='input-group form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Id'
                    value={injury_delete.id}
                    required
                    onChange={e =>
                      setInjury_delete({
                        ...injury_delete,
                        id: e.target.value
                      })
                    }
                  />
                </div>
                <div className='input-group form-group'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Injury Id'
                    value={injury_delete.injury_id}
                    required
                    onChange={e =>
                      setInjury_delete({
                        ...injury_delete,
                        injury_id: e.target.value
                      })
                    }
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Delete'
                    className='btn btn-danger btn-block text-light float-right'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='card3'>
            <div className='card-header'>
              <h3 className='text-light'>Delete User</h3>
              {error === 'Delete Success' && <Alerts />}
            </div>
            <div className='card-body'>
              <form onSubmit={submit_delete}>
                <div className='input-group form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Id'
                    value={delete_id}
                    required
                    onChange={e => setDelete(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Delete'
                    className='btn btn-block text-light'
                    style={{ background: '#cf00b3' }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
