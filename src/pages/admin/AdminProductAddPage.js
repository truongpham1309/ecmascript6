import { useEffect } from "../../utilities";
import { Students } from "../../data";




const AdminProductAddPage = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const Name = document.querySelector("#nameStudent");
    const Age = document.querySelector("#ageStudent");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newStudent = {
        id: Students.length + 1,
        Name: Name.value,
        Age: Age.value
      }
      console.log(newStudent);
    });
  });



  return `
  <div class="container">
  <h5 class="text-center"> Create New Student </h5>
  <div class="tw-mx-auto tw-justify-center tw-flex">
  <form id="form-add">
      <div class="row">
        <label for="">Full Name</label>
        <input class="form-control tw-w-20" type="text" name="" id="nameStudent">
      </div>
      <div class="row">
        <label for="">Age</label>
        <input class="form-control tw-w-20" type="number" name="" id="ageStudent">
      </div>
      <button id="add" class="btn btn-primary mt-2 tw-relative tw-left-0" type="submit">Add Student</button>
  </form>
  </div>
</div>
  `
}

export default AdminProductAddPage