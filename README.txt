/states
const [states, setStates] = useState<StatesProps[]>([]);

useEffect(() => {
  fetch('http://localhost:5000/states')
    .then(response => response.json())
    .then(data => {
      setStates(data.states);
    })
}, []);

/user/signup
  const [user, setUser] = useState();
  async function handleSendForm() {
    api
      .post('/user/signup', {
        name: 'Nicole Soares',
        email: 'nicolehenckel@gmail.com',
        password: 'barbielinda',
        state: '6244a607d0484a456f63e440'
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("erro: "+err);
      })
  }

  
