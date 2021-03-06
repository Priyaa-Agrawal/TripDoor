var firebaseConfig = {
  apiKey: 'AIzaSyCHLioFJvnng5Y6HO81RGMk42TbBg_yb6Y',
  authDomain: 'tripdoor-7e669.firebaseapp.com',
  databaseURL: 'https://tripdoor-7e669.firebaseio.com',
  projectId: 'tripdoor-7e669',
  storageBucket: 'tripdoor-7e669.appspot.com',
  messagingSenderId: '109681312727',
  appId: '1:109681312727:web:368bea89ae7e4770d50192',
  measurementId: 'G-PVHDLYPD3C',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

// Reference messages collection
var messagesRef = firebase.database().ref('messages')

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

//Submit Form
function submitForm(e) {
  e.preventDefault()

  // Get values
  var name = getInputVal('name')
  var phone = getInputVal('phone')
  var email = getInputVal('email')
  var message = getInputVal('message')
  var date = new Date()

  //Save Message
  saveMessage(date, name, phone, email, message)

  //Show alert
  document.querySelector('.sent-message').style.display = 'block'

  //Hide alert
  setTimeout(function () {
    document.querySelector('.sent-message').style.display = 'none'
  }, 3000)

  //Clear form
  document.getElementById('contactForm').reset()
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save message to Firebase
function saveMessage(date, name, phone, email, message) {
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    date: date.toDateString(),
    name: name,
    phone: phone,
    email: email,
    message: message,
  })
  // showMessage()
}

// Get message from Firebase
// function showMessage() {
//   messagesRef.on('value', function (snapshot) {
//     snapshot.forEach(function (childSnapshot) {
//       var data = childSnapshot.val()

//       document.getElementById('contact-table').innerHTML += `
//       <tr>
//       <th scope="row">${data.date}</th>
//       <td>${data.name}</td>
//       <td>${data.phone}</td>
//       <td>${data.email}</td>
//       <td>${data.message}</td>
//       </tr>`
//     })
//   })
// }
