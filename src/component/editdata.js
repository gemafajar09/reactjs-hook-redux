import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tampilUser, dataUser, updateUser } from '../features/userData';
import { useParams, useNavigate } from 'react-router-dom';

const Editdata = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const user = useSelector((state) => dataUser.selectById(state, id));
    console.log(user);

    useEffect(() => {
        dispatch(tampilUser())
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setNama(user.nama)
            setAlamat(user.alamat)
        }
    }, [user]);

    const update = async (e) => {
        e.preventDefault();
        await dispatch(updateUser({ id, nama, alamat }));
        navigate('/');
    }

    return (
        <div className="container">
            <form onSubmit={update} action="">
                <div className="field">
                    <label className='label'>Nama</label>
                    <input className='input' value={nama} onChange={event => setNama(event.target.value)} type='text' />
                </div>
                <div className="field">
                    <label className='label'>Alamat</label>
                    <input className='input' value={alamat} onChange={event => setAlamat(event.target.value)} type='text' />
                </div>
                <div className="control">
                    <button className="button is-primary" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Editdata
