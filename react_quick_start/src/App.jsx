import Avatar from './assets/components/Avatar';  
import Profile from './assets/components/Profile';

function App() {
  const greetings = 'Hello!';

  const showValue= 'profile';
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  return (
      <article className='bg-white p-4 w-1/2 rounded-2xl shadow-xl'>
        <h2 className='text-3xl font-bold mb-2' style={{ color: 'red', fontStyle: "italic" }}> - {greetings} Amazing scientists</h2>
        <div className='flex gap-1'>
          <Profile />
        </div>
    <div>
        <Avatar width={50} height={50} profile={"https://i.imgur.com/MK3eW3A.jpg"}/>
        <Avatar width={100} height={100} profile={"https://i.imgur.com/MK3eW3A.jpg"}/>
        <Avatar width={500} height={500} profile={"https://i.imgur.com/MK3eW3A.jpg"} />
      </div>

      <div>
        {
          showValue === 'profile' ? (<Profile />) :  (<Avatar />)
        }
      </div>
      <hr className="m-4" />
      <ul>
        {people.map((person) => (
          <li key={index}>{person}></li>
        ))}
      </ul>
    </article>

  );
}

export default App;
