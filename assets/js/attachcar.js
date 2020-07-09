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

// Reference taxi collection
var taxiRef = firebase.database().ref('taxi')

// Listen for form submit
document.getElementById('attachcarForm').addEventListener('submit', submitForm)

//Submit Form
function submitForm(e) {
  e.preventDefault()

  // Get values
  var firstname = getInputVal('firstname')
  var lastname = getInputVal('lastname')
  var phone = getInputVal('phone')
  var email = getInputVal('email')
  var vehicle = getInputVal('vehicle')
  var date = new Date()
  // console.log(name, phone, email, message, t)

  //Save Message
  taxi(date, firstname, lastname, phone, email, vehicle)

  //Show alert
  document.querySelector('.alert').style.display = 'block'

  //Hide alert
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none'
  }, 3000)

  //Clear form
  document.getElementById('attachcarForm').reset()
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save message to Firebase

function taxi(date, firstname, lastname, phone, email, vehicle) {
  var newTaxiRef = taxiRef.push()
  newTaxiRef.set({
    date: date.toDateString(),
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email,
    vehicle: vehicle,
  })
}
