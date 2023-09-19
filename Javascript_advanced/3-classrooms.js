// createClassRoom function
function createClassRoom(numbersOfStudents) {
    // studentSeat function
    function studentSeat(seat) {
      // function that returns the seat number
      return function () {
        return seat;
      };
    }
  
    // Create and populate the students array
    var students = [];
    for (var i = 1; i <= numbersOfStudents; i++) {
      var seatNumber = studentSeat(i);
      students.push(seatNumber);
    }
  
    // Return the students array
    return students;
  }
  
  // closure classRoom with 10 students
  var classRoom = createClassRoom(10);
  

  console.log(classRoom[0]());
  console.log(classRoom[3]()); 
  console.log(classRoom[9]()); 
  