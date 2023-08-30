const ContactPage = () => {
  const infomation = JSON.parse(localStorage.getItem('jobs'));
  const infomation2 = infomation[1];
  

  return `
    <div class="grid justify-center">
      <div> <span class="text-gray-700 text-[15px] my-4"> ${infomation[0]}</span> </div>
      <div> <span class="text-gray-700 text-[15px] my-4"> ${infomation[3]}</span> </div>
      <div> <span class="text-gray-700 text-[15px] my-4"> ${infomation[2]}</span> </div>
    </div> 
    `
}
export default ContactPage