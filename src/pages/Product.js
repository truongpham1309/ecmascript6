import { useEffect, useState } from "../utilities/index.js";

const ProductAdd = () => {
  const [Student, setStudent] = useState([]);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-remove');
    for(let btn of btns) {
      btn.addEventListener('click', function () {
        const id = btn.getAttribute('data-id');
        const newStudent = Student.filter((student) => +student.id !== +id);
        setStudent(newStudent);
        localStorage.setItem('Student', JSON.stringify(Student));
  });
  }
})


  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('Student')) || [];
    setStudent(students);
  },[])


  return `
  <h1 class="tw-text-4xl tw-text-center tw-font-[700] tw-my-6"> Student List </h1>
  <div class="tw-flex tw-justify-center">
    <table border="1" class="tw-border-collapse mt-4"> 
    <tr>
      <th class="tw-px-8 tw-text-center tw-py-3" >#</th>
      <th class="tw-px-8 tw-text-center tw-py-3" >Name</th>
      <th class="tw-px-8 tw-text-center tw-py-3" >Age</th>
      <th class="tw-px-8 tw-text-center tw-py-3" >Action</th>
      <th class="tw-px-8 tw-text-center tw-py-3" ><a href="/admin/student/add" class="" ><button class='btn-add btn btn-primary tw-ease-in-out tw-duration-300'> Add Student </button></a></th>
    </tr>
      ${Student.map((student, index) => {
        return `
          <tr>
          <td class="tw-px-8 tw-text-center tw-w-60  tw-py-3">${index + 1}</td>
          <td class="tw-px-8 tw-w-60  tw-py-3">${student.name}</td>
          <td class="tw-px-8 tw-text-center tw-w-60  tw-py-3">${student.age}</td>
          <td class="tw-px-8 tw-text-center tw-w-60  tw-py-3">
            <button data-id="${student.id}" class="btn btn-danger btn-remove">DELETE</button>
            <a href="/admin/student/${student.id}/edit" class="btn btn-success">EDIT</a>
          </td>
          </tr>
        `
      }).join('')}
    </table>
    </div>
  `
    }
      

export default ProductAdd