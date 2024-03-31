import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
import bg from '../../assets/bg1.png'

const RightSideNav = () => {
    return (
        <div >
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="p-4 flex text-lg items-center border rounded-t-lg w-full">
                    <FaGoogle className='mr-1.5'></FaGoogle>
                    Google
                </button>
                <button className="p-4 flex text-lg items-center border rounded-t-lg w-full">
                    <FaGithub className='mr-1.5'></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Facebook</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>


        <div
       style={{ 
        backgroundImage: `url(${bg})` 
        }}
         className="px-10 bg-no-repeat bg-cover object-contain flex flex-col items-center justify-center  w-full h-96 text-center gap-5">
        <h1 className='text-xl font-semibold text-white'>
            Create an Amazing Newspaper
        </h1>
        <p className='text-gray-300 font-light'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className='px-4 py-2 font-semibold text-white bg-rose-500 rounded-md'>
            Learn More
        </button>
        </div>


        </div>
    );
};

export default RightSideNav;