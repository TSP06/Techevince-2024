import React from "react";
import Cross from "../assets/Cross-Line.png";
import Raman from "../assets/raman.png";
import Ball from "./ball";
import { cleanUrl } from "../service/handleImage";

 const icons = {
   facebook: (
     <svg
       height='24px'
       style={{
         fillRule: "evenodd",
         clipRule: "evenodd",
         strokeLinejoin: "round",
         strokeMiterlimit: 2,
         fillOpacity: "1",
         fill: "#fff",
       }}
       version='1.1'
       viewBox='0 0 512 512'
       width='100%'
       xmlSpace='preserve'
       xmlns='http://www.w3.org/2000/svg'
       xmlns:serif='http://www.serif.com/'
       xmlnsXlink='http://www.w3.org/1999/xlink'
     >
       <path d='M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z' />
     </svg>
   ),
   instagram: (
     <svg
       height='24px'
       style={{
         fillRule: "evenodd",
         clipRule: "evenodd",
         strokeLinejoin: "round",
         strokeMiterlimit: 2,
         fillOpacity: "1",
         fill: "#fff",
       }}
       version='1.1'
       viewBox='0 0 512 512'
       width='100%'
       xmlSpace='preserve'
       xmlns='http://www.w3.org/2000/svg'
       xmlns:serif='http://www.serif.com/'
       xmlnsXlink='http://www.w3.org/1999/xlink'
     >
       <path d='M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z' />
     </svg>
   ),
   linkedin: (
     <svg
       height='24px'
       style={{
         fillRule: "evenodd",
         clipRule: "evenodd",
         strokeLinejoin: "round",
         strokeMiterlimit: 2,
         fillOpacity: "1",
         fill: "#fff",
       }}
       version='1.1'
       viewBox='0 0 512 512'
       width='100%'
       xmlSpace='preserve'
       xmlns='http://www.w3.org/2000/svg'
       xmlns:serif='http://www.serif.com/'
       xmlnsXlink='http://www.w3.org/1999/xlink'
     >
       <path d='M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z' />
     </svg>
   ),
   twitter:
   
    
   (
     
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="white" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>  
      
      
    ),
 };


 

export default function ProjectDescription({ isVisible, onClose, data, VoteHandler, loggedBool, voteBool, selectedButton, votingAllowed }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-25
        backdrop-blur-sm flex justify-center items-center '
      id='wrapper'
      onClick={handleClose}
      style={{ transition: "right 1s ease-in-out" }}
    >
      <div className='flex w-11/12 h-5/6 text-white shadow-2xl'>
        <div className='w-full md:w-7/12 bg-customBlue-200 items-center text-left '>
          <div className='h-5/6 w-9/12 md:w-10/12 lg:w-8/12 items-center mx-[15%] md:mx-[5%] lg:md-[10%] mt-16 md:mt-8'>
            <img
              className='hover:cursor-pointer h-4 md:h-6'
              onClick={() => onClose()}
              src={Cross}
            />
            <br />
            <div className='flex mb-2 md:mb-6'>
              <p className='text-2xl md:text-5xl font-semibold text-white -tracking-[0.01em] leading-tight font-body mr-2 md:mr-4'>
                {data.name}
              </p>
              <div
                className='h-8 md:h-12'
                style={{ borderLeft: "1px solid white" }}
              ></div>
              <div className='ml-2 md:ml-4 -mt-1 md:-mt-2'>
                <p className='text-xs md:text-sm'>Stall No.</p>
                <p className='text:2xl md:text-2xl font-semibold'>
                  {data.booth}
                </p>
              </div>
            </div>
            <p className='font-semibold md:text-base md:leading-4 mb-2'>
              About Project
            </p>
            <p className='text-sm md:text-base mb-2 md:mb-4'>
              {data.description}
            </p>
            {/* <p className='font-semibold md:text-base md:leading-6 mb-2'>
              Other Details
            </p>
            <p className='text-sm md:text-base mb-4 md:mb-4'>
              {data.description}
            </p> */}
            <div className='flex items-center h-10 md:h-12 '>
             


             
              <div >
                <p className='font-body font-semibold text-base md:leading-4 -tracking-[0.01em]'>
                  {data.club.name}
                </p>
                <p className='text-sm'>IIT Guwahati</p>
              </div>
            </div>
            <div className='flex mt-6 mb-6'>
              <p className='font-semibold text-base leading-6 mr-4'>Team:</p>
              <p className='text-base'>{data.teamMembers.join(", ")}</p>
            </div>
            <div className='mt-4 flex gap-8 bg-white w-min p-2 rounded-full'>
              {data.club.links.map((social, index) => {
                return (
                  <a href={social.link} target='_blank' key={index}>
                    <div className='flex justify-center items-center gap-2 rounded-full bg-gray-800 h-10 md:h-12 w-10 md:w-12'>
                      <div className='w-6 h-6'>
                        {icons[social.name.toLowerCase()]}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className='bg-white w-0 md:w-5/12'>
          <div className='mx-12 flex h-full relative overflow-hidden'>
            <div className='absolute top-10 left-0 z-20'>
              <Ball image={cleanUrl(data.images[0])} bgColor='white' />
            </div>
            <div className='absolute top-10 right-0 z-20'>
              <Ball image={cleanUrl(data.images[1])} bgColor='white' />
            </div>
            <div className='absolute bottom-40 left-32 z-20'>
              <Ball image={cleanUrl(data.images[2])} bgColor='white' />
            </div>
            <div className='self-end mb-20 bg-customBlue-200 rounded-full w-full p-5 flex justify-center items-center text-white'
            style={{
              backgroundColor: loggedBool === false ? "grey" : selectedButton === data._id ? "#16a34a" : "#2563eb",
              cursor: loggedBool === false ? "not-allowed" : selectedButton === data._id ? "not-allowed": "pointer",
            }}
            onClick={() => {
              if(votingAllowed === false){
                alert("Voting Not Allowed");
                return;
              }
              if(loggedBool === false || selectedButton === data._id ) return;
              VoteHandler(data._id);
              return;
            }}
            >
              {selectedButton === data._id &&
                <p className='font-ClashDisplay text-2xl font-bold'>
                  Voted
                </p>
              }
              {selectedButton != data._id &&
                <p className='font-ClashDisplay text-2xl font-bold'>
                  Vote Now
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
