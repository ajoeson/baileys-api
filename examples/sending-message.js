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
  //   receiver: '85294587533',
  //   message: {
  //     text: '@85253189211 is Jane',
  //     mentions: ['85253189211@s.whatsapp.net']
  //   },
  // })

  const buttons = [
    { buttonId: 'id1', buttonText: { displayText: '13:00' }, type: 1 },
    { buttonId: 'id2', buttonText: { displayText: '13:15' }, type: 1 },
    { buttonId: 'id3', buttonText: { displayText: '13:30' }, type: 1 },
    // { buttonId: 'id4', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id5', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id6', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id7', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id8', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id9', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id10', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id11', buttonText: { displayText: 'Button 3' }, type: 1 },
    // { buttonId: 'id12', buttonText: { displayText: 'Button 3' }, type: 1 },
  ]

  // await sendMessage('chats/send', {
  //   receiver: '85256660357',
  //   message: {
  //     text: "Testing whatsapp gateway",
  //     footer: 'HI JOny',
  //     buttons: buttons,
  //     headerType: 1
  //   },
  // })

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
  //   receiver: '85291880430-1597154744',
  //   message: {
  //     text: "禮拜六幾點練歌？",
  //     footer: 'JA~',
  //     buttons: buttons,
  //     headerType: 1
  //   },
  // })
})()
