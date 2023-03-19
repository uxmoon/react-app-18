import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
function App() {
  let items = ['Los Angeles', 'Seoul', 'Tokyo', 'Cologne', 'Buenos Aires']

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <Alert>
        This is a <em>children text</em>.
      </Alert>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}
export default App
