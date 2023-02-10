import React from 'react'

export const InputForm = () => {
  return (
    <div className="App">
      <form action="">
      <div className='login_center'>
      <h2 className='login'>Sign In</h2><br /><br />
      <label htmlFor="">Username: </label>
      <input type="text" required /><br /><br />
      <label htmlFor="">Password: </label>
      <input type="password" required /><br /><br />
      <div className='botton-hover'><br />
      <button id='button'> <i>login</i> </button></div>
      </div>
      </form>
    </div>
  )
}
