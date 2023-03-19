import ListGroup from './components/ListGroup'
function App() {
  let items = ['Los Angeles', 'Seoul', 'Tokyo', 'Cologne', 'Buenos Aires']

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}
export default App
