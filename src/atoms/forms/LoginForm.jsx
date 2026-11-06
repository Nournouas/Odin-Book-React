export default function LoginForm({handleSubmit, errors}) {
  return (
    <form onSubmit={handleSubmit} className='not-last:shadow-xl flex flex-col items-center gap-4 p-4 md:p-10 w-full md:min-w-[400px]'>
      <h1 className='text-4xl bold'>Log in</h1>
      <h2>Log in to continue</h2>
      <input className='w-full p-2 border-b' placeholder='Email' type="email" name="email" id="email" />
      {errors.email && <li className='w-full text-xs text-red-800'>{errors.email}</li>}
      <input className='w-full p-2 border-b' placeholder='Password' type="password" name="password" id="password" />
      {errors.password && <li className='w-full text-xs text-red-800'>{errors.password}</li>}
    <button className='w-full bg-blue-900 text-white cursor-pointer py-3 hover:bg-black' type="submit">Log in</button>
  </form>
  )
}
