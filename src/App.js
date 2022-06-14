import React from 'react';
import { StackingLayout, Alert } from '@nutanix-ui/prism-reactjs';

class App extends React.Component {

  render() {
    return <StackingLayout>
      <Alert
        type={ Alert.AlertTypes.WARNING }
        message="Warning! Better check yourself, you're not looking too good." />
      <Alert
        type={ Alert.AlertTypes.ERROR }
        message="Oh snap! Change a few things up and try submitting again." />

      <Alert
        type={ Alert.AlertTypes.SUCCESS }
        message="Well done! You successfully read this important alert message." />
    </StackingLayout>
  }

}

export default App;