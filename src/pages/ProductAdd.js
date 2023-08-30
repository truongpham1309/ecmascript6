import { Students } from "../data/index.js"

const ProductAdd = () => {
  return `
  <a href="/admin/student/add" ><button class='btn btn-primary '> Add Student </button></a>
    <div class="tw-grid tw-grid-cols-3 tw-justify-center"> 
      ${Students.map((student) => {
        return `<div class="tw-mb-3 tw-grid tw-justify-center">
          <p>ID: ${student.id} </p> 
          <h4 class="tw-text-[18px]">Name: ${student.name} </h4>
          <span>Age: ${student.age} </span>
          </div>
        `
      }).join('')}
    </div>
  `
    }
      

export default ProductAdd