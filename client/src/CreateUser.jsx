import {React} from 'react';

export default function CreateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
         <div className='w-50 bg-white rounded p-3'>
            <form>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input type='text' placeholder='Enter Age' className='form-control'></input>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
         </div>
     
    </div>
  )
}
