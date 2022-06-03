import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tampilUser, dataUser, hapusUser } from '../features/userData';
import { Link } from 'react-router-dom';

const Tampildata = () => {
    const dispatch = useDispatch();
    const user = useSelector(dataUser.selectAll);

    useEffect(() => {
        dispatch(tampilUser());
    }, [dispatch]);

    return (
        <div className='container py-3'>
            <div className="card">
                <div className="card-header-title">
                    <h5>Data User</h5>
                    <br />
                    <Link to="/tambah" className='button is-small is-primary'>Tambah Data</Link>
                </div>
                <div className="card-content">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((x, i) => (
                                <tr key={x.id}>
                                    <td>{i + 1}</td>
                                    <td>{x.nama}</td>
                                    <td>{x.alamat}</td>
                                    <td>
                                        <Link to={`/edit/${x.id}`} className='button is-info id-small'>Edit</Link>
                                        <button onClick={() => dispatch(hapusUser(x.id))} className='button is-danger id-small'>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tampildata
