const ContactPage = () => {
  const infomation = JSON.parse(localStorage.getItem('jobs'));
  const infomation2 = [

  ];
  

  return `
    <div class="tw-grid tw-justify-center tw-font-bold tw-text-2xl">
      <div> <span class="text-gray-700 text-[15px] my-4">DEV TRUONG</span> </div>
      <div> <span class="text-gray-700 text-[15px] my-4">WEB DEVELOPER</span> </div>
      <div> <span class="text-gray-700 text-[15px] my-4">INTERNSHIP</span> </div>
    </div> 
    `
}
export default ContactPage