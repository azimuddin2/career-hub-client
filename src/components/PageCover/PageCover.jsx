import backgroundLeft from '../../assets/images/bg1.png';
import backgroundRight from '../../assets/images/bg2.png';

const PageCover = ({ title }) => {

    return (
        <section className='bg-[#F9FAFF]'>
            <div className='pt-20'>
                <h2 className='text-3xl text-accent font-semibold text-center'>{title}</h2>
            </div>
            <div className='flex justify-between'>
                <img
                    src={backgroundLeft}
                    alt="background"
                    className='w-64'
                />
                <img
                    src={backgroundRight}
                    alt="background"
                    className='absolute top-0 right-0 w-60 lg:block hidden'
                />
            </div>
        </section>
    );
};

export default PageCover;