import ListGroup from './components/ListGroup'
function App() {
  let items = ['Los Angeles', 'Seoul', 'Tokyo', 'Cologne', 'Buenos Aires']

  return (
    <div>
      <ListGroup items={items} heading='Cities' />
    </div>
  )
}
export default App
