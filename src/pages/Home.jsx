import React from "react";
import "../pagesCSS/Home.css";

function Home() {
  return (
    <div>
      <div className="box p-[0.5rem]">
        <div className="  text-bold text-[1.5rem] m-[1rem] flex w-full justify-center ">
          MEET MY OOHR
        </div>
        <div className="flex justify-evenly flex-wrap mx-[0.5rem] items-center ">
          <div className="w-7/12 h-full items-center   ml-[1rem]">
            {" "}
            Your Peaceful Ride Through School Worries! GPS tracking, live camera
            views, and instant updates – we’ve got your back. With an easy
            interface, we turn school transportation stress into a breeze. Stay
            connected, stay carefree – myOohr, because your peace
            of mind matters!
          </div>
          <div>
            <img src="../oohr-main.png" width="445" height="445" alt="error" />
          </div>
        </div>
      </div>
      <div className="containers">
        <h1 className="head">Why do we need it?</h1>
        <div className="card_container">
          <div className="cards">
            <img className="image" src="../card_1.jpg" alt=" logo" />
            <p>
              The most obvious reason for that would be, the safety of children
              onboard the transport. There have been times when children have
              had to face bullying, harassment, and other inappropriate behavior
              while still in the school bus or van.
            </p>
          </div>
          <div className="cards">
            <img className="image" src="../card_2.jpg" alt=" logo" />
            <p>
              Traffic jams, along with vehicle breakdowns can cause
              unintentional delays for kids while commuting. Long delays can
              cause parents to worry about the safety of their children.
            </p>
          </div>
          <div className="cards">
            <img className="image" src="../card_3.jpg" alt=" logo" />
            <p>
              When left unsupervised, children tend to wander off. Sometimes,
              people with harmful intentions take advantage of this kind of
              opportunity.
            </p>
          </div>
          <div className="cards">
            <img className="image" src="../card_4.jpg" alt=" logo" />
            <p>
              Despite the availability of advanced technologies such as Facial
              Recognition, Biometric Scans, and other AI tools, their
              implementation to enhance the quality of school transportation has
              not been realized.
            </p>
          </div>
        </div>
      </div>
      <div className="containers">
        <h1 className="head"> What do we provides </h1>
        <div className="card_container">
          <div className="cards">
            <img className="image" src="../card_5.jpg" alt=" logo" />
            <p>
              Parents will receive notifications whenever the school vehicle
              picks up or drops off their child at the bus stop or school.
            </p>
          </div>
          <div className="cards">
            <img className="image" src="../card_6.jpg" alt=" logo" />
            <p>
              Parents can monitor the driver's route using the vehicle's GPS
              tracking.
            </p>
          </div>
          <div className="cards">
            <img className="image" src="../card_7.jpg" alt=" logo" />
            <p>
              Considering the route and traffic conditions, the app will show
              the Estimated Time of Arrival for the vehicle at the bus stop.
            </p>
          </div>
          <div className="cards">
            <img className="image" src="../card_8.jpg" alt=" logo" />
            <p>
              Live camera monitoring will be implemented in the vehicles to
              enhance safety, deter potential incidents, and ensure prompt
              response to emergencies, fostering a secure travel environment for
              passengers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-2xl text-[2rem] w-full  p-4 text-center font-bold mb-4">
          Our Commitment
        </h2>
        <div className=""></div>
        <div className="flex  flex-wrap justify-evenly ">
          <div className="w-full  m-[0.5rem] flex  w-full  p-4">
            <div className="mb-4 mr-[1rem]">
              <img
                src="https://img.freepik.com/free-vector/partnership-concept-illustration_114360-5954.jpg?w=1060&t=st=1702806663~exp=1702807263~hmac=54032ffb74bfde11b72c49e381f7c9b77b8f1564821725213a6ae575d39d54c9"
                alt="Image"
                className="w-full h-full mr-[0.5rem]"
              />
            </div>
            <div className="flex flex-col">
              <p className="p-[0.5rem]">
                {" "}
                At Oohr Innovations, we understand the paramount importance of
                your child's safety during the school commute. We strive to
                provide a robust technological solution that addresses these
                worries head-on. Our cutting-edge technology is designed with
                your child's well-being in mind, offering a comprehensive answer
                to the challenges of school transportation. From real-time GPS
                tracking to ensure precise location updates, to advanced safety
                features that prioritize your child's security, we've got it
                covered.
              </p>
              <p className="p-[0.5rem]">
                {" "}
                Our cutting-edge technology is designed with your child's
                well-being in mind, offering a comprehensive answer to the
                challenges of school transportation. From real-time GPS tracking
                to ensure precise location updates, to advanced safety features
                that prioritize your child's security, we've got it covered.
              </p>
            </div>
          </div>
          {/* <div className="w-full  flex border-2   m-[0.5rem] border-black md:w-1/3 p-4">
            <div className="mb-4 mr-[1rem]">
              <img
                src="https://img.freepik.com/free-vector/technology-gps-location-flyer-template_82472-509.jpg?w=740&t=st=1702806952~exp=1702807552~hmac=518a4fce3b351a6b489de69c9eae3ace043292ee526b6cf4c5054a9f96ebc72a"
                alt="Image"
                className="w-full h-auto mr-[0.5rem]"
              />
            </div>
            
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

// const Home = () => {
//   return <div className="text-red-500">Home</div>;
// };

// export default Home;
