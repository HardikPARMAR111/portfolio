import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaGithub,FaPython} from 'react-icons/fa'
import Main from "./components/Main";
export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Main/>
        <div>
        <h2 className="text-center text-3xl text-white font-bold mb-10 mt-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
           { [{ icon : <FaHtml5 size={60} className='pt-3 hover:text-red-400 transition-colors' title='HTML5'></FaHtml5>,nm:"HTML5"},
            { icon : <FaCss3 size={60} className='pt-3 hover:text-red-400 transition-colors' title='CSS3'></FaCss3>,nm:"CSS3"},
            { icon : <FaJs size={60} className='pt-3 hover:text-red-400 transition-colors' title='JavaScript'></FaJs>,nm:"JavaScript"},
            { icon : <FaNodeJs size={60} className='pt-3 hover:text-red-400 transition-colors' title='NodeJS'></FaNodeJs>,nm:"NodeJS"},
            { icon : <FaReact size={60} className='pt-3 hover:text-red-400 transition-colors' title='ReactJS'></FaReact>,nm:"ReactJS"},
            { icon : <FaPython size={60} className='pt-3 hover:text-red-400 transition-colors' title='Python'></FaPython>,nm:"Python"},].map((skill,index)=>(<div key={index} className=' flex items-center justify-center bg-gray-800 hover:bg-black transition-colors' style={{width:"30%", minWidth:"140px", height:"80px", flex:"0 1 30%" }} title={skill.nm}>{skill.icon}</div>))}
        </div>
      </div>
      </div>
    </>
  );
}
