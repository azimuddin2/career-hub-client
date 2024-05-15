import backgroundLeft from '../../assets/images/bg1.png';
import backgroundRight from '../../assets/images/bg2.png';

const PageCover = ({ title }) => {

    return (
        <div className='bg-[#F9FAFF]'>

            <div className=''>
                <h2 className='text-3xl text-accent font-semibold text-center'>{title}</h2>
            </div>
            
            <div className='flex justify-between'>
                <img src={backgroundLeft} alt="" className='w-64' />
                <img src={backgroundRight} alt="" className='absolute top-0 right-0 w-60' />
            </div>

        </div>
    );
};

export default PageCover;