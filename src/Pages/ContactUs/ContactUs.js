import React from "react";
const ContactUs = () => {
  return (
    <div name='contactus' className="mt-24 lg:mt-32">
      <div className='text-center'>
        <h2 className='text-green-500 font-mono text-center text-xl mb-2'>Contact Us</h2>
        <h2 className='text-3xl font-hairline font-bold mb-4'>Ask If You Know Something?</h2>
        </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src="https://static.vecteezy.com/system/resources/previews/003/578/834/non_2x/online-support-illustration-flat-design-concept-vector.jpg" className="hidden lg:block lg:max-w-lg maz-w-sm rounded-lg lg:ml-60" alt="" />
          <form>
          <div className="lg:ml-8">
            <h1 className="text-2xl font-bold text-green-500 text-center font-mono mb-4">Contact Us</h1>
            <div className="text-center">
              <input type="text" placeholder="Name" name="name" className="form-control input w-72 max-w-lg border rounded-full border-blue-400 mb-4" />
              <input type="email" placeholder="Email" name="user_email" className="form-control input w-72 max-w-xs border rounded-full border-blue-400 mb-4" />
              <textarea
                className="form-control textarea w-72 max-w-xs rounded-lg border border-blue-400"
                placeholder="Your message"
                name="message"
                rows={6}
              ></textarea>
            </div>
            <div className="flex justify-center">
            <input type="submit" value="Submit" className="form-control cursor-pointer py-1 px-4 border rounded-full border-green-500 text-white bg-green-500 font-semibold mt-3 mb-3">
              </input>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;