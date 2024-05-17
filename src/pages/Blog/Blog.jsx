import questionsGif from '../../assets/images/questions.gif';

const Blog = () => {
    return (
        <section className="max-w-screen-lg lg:mx-auto mx-5 my-12">
            <div className="lg:flex items-center">
                <div className="flex-1">
                    <img src={questionsGif} alt="Questions" className='w-11/12 lg:w-4/5 mx-auto' />
                </div>
                <div className="flex-1">
                    <div className="collapse lg:relative static collapse-arrow bg-[#F9FAFF] mb-2 rounded-lg">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What do you career?
                        </div>
                        <div className="collapse-content">
                            <p>Definition. A career refers to your profession or chosen line of work, which can include one job or multiple jobs. It also refers to the education, training, and experience needed to grow in your current role or move on to another one.</p>
                        </div>
                    </div>
                    <div className="collapse lg:relative static collapse-arrow bg-[#F9FAFF] mb-2 rounded-lg">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What is a career vs job?
                        </div>
                        <div className="collapse-content">
                            <p>A job is just a role, but a career is made up of the combination of roles, experiences, education and pathways you take to achieve your goals. Of course, it's fine if you need to take a job to pay the bills - you may not always have the luxury to be selective.</p>
                        </div>
                    </div>
                    <div className="collapse lg:relative static collapse-arrow bg-[#F9FAFF] mb-2 rounded-lg">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What defines your career?
                        </div>
                        <div className="collapse-content">
                            <p>It is comprised of the different jobs you have held, titles you have earned and work you have accomplished over a long period of time. When viewed in this context, a career includes everything related to your career development, including your choice or profession and advancement.</p>
                        </div>
                    </div>
                    <div className="collapse lg:relative static collapse-arrow bg-[#F9FAFF] mb-2 rounded-lg">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How to choose career essay?
                        </div>
                        <div className="collapse-content">
                            <p>You must understand your area of interest to choose a career. For instance, someone who dances well can surely become a doctor, but his interest will always be in dance. Thus, ensure that you have the caliber to perform well in the field you choose. This will come from your area of interest itself.</p>
                        </div>
                    </div>
                    <div className="collapse lg:relative static collapse-arrow bg-[#F9FAFF] mb-2 rounded-lg">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What is a career for students?
                        </div>
                        <div className="collapse-content">
                            <p>A career is an individual's 'journey' of lifelong learning, working, extensive training and learning new skills. It can be described as employment or a vocation that generally involves some specialised training or formal study.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;