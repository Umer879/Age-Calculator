// data collect in html file 
const dateBirth = document.getElementById('birth')
const calculateAge = document.getElementById('calculate')
const display = document.getElementById('age')
// current date, time and year 
const date = new Date()
const fullYear = date.getFullYear()
// Birthday Function 
function birth() {
    const userDate = dateBirth.value;
    if (userDate === '') {
        alert('Enter Your Birthday')
    } else {
        const userYear = new Date(userDate).getFullYear()
        calAge = (fullYear - userYear)
        display.innerText = calAge
    }
}
function getAge(){
    const fullDate = date.getMonth()
    console.log(fullDate);
}
getAge()
// click function 
calculateAge.addEventListener('click', birth)




