import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { simpanUser } from '../features/userData';
import { useNavigate } from 'react-router-dom';

const Tambahdata = () => {
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const simpanDataUser = (e) => {
    e.preventDefault();
    dispatch(simpanUser({ nama, alamat }));
    navigate('/');
  }

  return (
    <div className="container">
      <form onSubmit={simpanDataUser} action="">
        <div className="field">
          <label className='label'>Nama</label>
          <input className='input' onChange={event => setNama(event.target.value)} type='text' />
        </div>
        <div className="field">
          <label className='label'>Alamat</label>
          <input className='input' onChange={event => setAlamat(event.target.value)} type='text' />
        </div>
        <div className="control">
          <button className="button is-primary" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Tambahdata
