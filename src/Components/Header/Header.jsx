import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center py-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-700'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;