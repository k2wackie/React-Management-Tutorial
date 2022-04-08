import Customer from './components/Customers';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '학생',
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '840512',
    'gender': '남자',
    'job': '프로그래머',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동',
    'birthday': '950212',
    'gender': '남자',
    'job': '디자이너',
  },
]

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            birthday={c.birthday}
            job={c.job}
          />);
      })}      
    </div>
  );
}

export default App;
