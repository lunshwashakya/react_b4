import Profile from './assets/components/Profile';

function App() {
  const greetings = 'Hello!';
  return (
    <div className='flex justify-center p-4'>
      <article className='bg-white p-4 w-1/2 rounded-2xl shadow-xl'>
          <h2 className='text-3xl font-bold mb-2' style={{color:'red', fontStyle:"italic"}}> - {greetings} Amazing scientists</h2>
      <div className='flex gap-1'>
      <Profile />
      <Profile />
      <Profile />
      </div>
      </article>
    </div>
  )
}

export default App;
