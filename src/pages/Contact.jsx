import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* LEFT SIDE */}
          <div className="flex-1 pr-0 lg:pr-28">
            <h1 className="text-[64px] font-extrabold text-black mb-20 tracking-tight">
              Let’s talk
            </h1>

            <form className="space-y-12 max-w-xl">

              {["Name:", "Phone:", "Select Product", "Message"].map((label, i) => (
                <div key={i}>
                  <label className="text-gray-400 text-sm">{label}</label>
                  {label === "Message" ? (
                    <textarea
                      rows="1"
                      className="w-full border-b border-gray-300 focus:border-yellow-500 outline-none py-2 bg-transparent"
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 focus:border-yellow-500 outline-none py-2 bg-transparent"
                    />
                  )}
                </div>
              ))}

              <div className="pt-6">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-14 py-4 rounded-full font-semibold tracking-wide shadow-md"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[430px] bg-yellow-500 p-14 flex flex-col justify-center mt-16 lg:mt-0">

            {/* HOURS */}
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-white mb-4">Hours</h3>
              <div className="h-[2px] bg-white/40 mb-4"></div>
              <p className="text-blue-900 font-semibold">
                Monday - Friday, 9:00 - 1800
              </p>
            </div>

            {/* ADDRESS */}
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-white mb-4">Address</h3>
              <div className="h-[2px] bg-white/40 mb-4"></div>
              <p className="text-blue-900 font-semibold leading-relaxed">
                Khasra No. 1163/3 ,Biswa -8, Khandsa,<br />
                Opp. GKN International, Begampur<br />
                Khatola, Near Green Land school ,<br />
                Sector - 34,Block A, Gurugram,<br />
                Haryana - 122002
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact</h3>
              <div className="h-[2px] bg-white/40 mb-4"></div>
              <p className="text-blue-900 font-semibold">+91 9811608030</p>
              <p className="text-blue-900 font-semibold break-all">
                info@conicautomotive.com
              </p>
              <p className="text-blue-900 font-semibold break-all">
                devinder@conicauto.com
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* MAP */}
      {/* Full Width Map Section */}
      <div className="w-full h-[600px] grayscale relative opacity-80 border-t border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.523163712428!2d76.935!3d28.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzE5LjYiTiA3NsKwNTYnMDguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5"></div>
      </div>
    </div>
  );
};

export default Contact;
