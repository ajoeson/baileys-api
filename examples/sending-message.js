import fetch from "node-fetch";
const BASE_URI = 'http://localhost:8000/'
const SESSION_ID = 'john'

const sendMessage = async (endpoint, data) => {
  // Here we are using fetch API to send the request
  const response = await fetch(`${BASE_URI}${endpoint}?id=${SESSION_ID}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

(async () => {
  // Send Text Message to Someone
  // await sendMessage('chats/send', {
  //     receiver: '85253189211',
  //     message: {
  //         text: 'Hello there!',
  //     },
  // })

  const buttons = [
    { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
    { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 },
    { buttonId: 'id3', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id4', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id5', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id6', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id7', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id8', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id9', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id10', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id11', buttonText: { displayText: 'Button 3' }, type: 1 },
    { buttonId: 'id12', buttonText: { displayText: 'Button 3' }, type: 1 },
  ]

  await sendMessage('chats/send', {
    receiver: '85256660357',
    message: {
      text: "The sub9 messaging gateway works now.",
      footer: 'Hello World',
      buttons: buttons,
      headerType: 1
    },
  })

  // Send Bulk Text Message to Multiple Person
  // await sendMessage('chats/send-bulk', [
  //     {
  //         receiver: '628231xxxxx',
  //         message: {
  //             text: 'Hello! How are you?',
  //         },
  //     },
  //     {
  //         receiver: '628951xxxxx',
  //         message: {
  //             text: "I'm fine, thank you.",
  //         },
  //     },
  // ])

  // // Send Text Message to a Group
  // await sendMessage('groups/send', {
  //     receiver: '628950xxxxx-1631xxxxx',
  //     message: {
  //         text: 'Hello guys!',
  //     },
  // })
})()
