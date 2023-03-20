import ListGroup from './components/ListGroup'
import { Alert } from './components/Alert'
import { Button } from './components/Button'
import { useState } from 'react'
function App() {
  let items = ['Los Angeles', 'Seoul', 'Tokyo', 'Cologne', 'Buenos Aires']
  const [displayAlert, setDisplayAlert] = useState(false)

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      {displayAlert && (
        <Alert onClose={() => setDisplayAlert(false)}>
          This is a <em>children text</em>.
        </Alert>
      )}
      <Button color='dark' onClick={() => setDisplayAlert(true)}>
        Show alert
      </Button>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}
export default App
