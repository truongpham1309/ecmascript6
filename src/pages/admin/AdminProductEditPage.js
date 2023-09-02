import { router, useEffect } from "../../utilities";

const AdminStudentEditPage = ({ id }) => {
  const students = JSON.parse(localStorage.getItem('Student')) || [];
  const currentProduct = students.find((student) => +student.id === +id);
    
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const Name = document.querySelector("#nameStudent");
    const Age = document.querySelector("#ageStudent");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newStudent = {
        id: id,
        name: Name.value,
        age: +Age.value
      }
      // Cập nhật phần tử trong mảng
      const newStudents = students.map((student) => {
        return +student.id === +newStudent.id ? newStudent : student;
      });
      // console.log(newStudents);
      // Lưu lại mảng trong localStorage
      localStorage.setItem('Student', JSON.stringify(newStudents));  
      // chuyển về trang read Student
      router.navigate("/products");
    });
  });


  if(!currentProduct) return null;
  return `
  <div class="container">
  <h5 class="text-center"> Update Student </h5>
  <div class="tw-mx-auto tw-justify-center tw-flex">
  <form id="form-add">
      <div class="row">
        <label for="">Full Name</label>
        <input class="form-control tw-w-20" type="text" name="" id="nameStudent" value="${currentProduct.name}">
      </div>
      <div class="row">
        <label for="">Age</label>
        <input class="form-control tw-w-20" type="number" name="" id="ageStudent" value="${currentProduct.age}">
      </div>
      <button class="btn btn-primary mt-2 tw-relative tw-left-0" type="submit">Update Student</button>
  </form>
  </div>
</div>
  `
}

export default AdminStudentEditPage