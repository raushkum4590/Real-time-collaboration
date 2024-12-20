
import image from './../assets/Designer.jpeg';
import { AtomIcon, Edit, Share2 } from 'lucide-react'

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="jumbotron bg-light p-5">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="display-4">Welcome to CollabTool</h1>
                        <p className="lead">
                            CollabTool is your go-to platform for seamless real-time collaboration. 
                            Work together on documents, share ideas, and communicate effortlessly with your team.
                        </p>
                        <div className='btn  btn-primary'>
                            Start Here
                        </div>
                    </div>
                    <div style={{ width: '1100px', height: '500px' }}>
                        <img src={image} alt='simple' style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <hr className="my-4"/>
                <p>
                    Whether you are working on a team project or just need to organize your thoughts, 
                    CollabTool offers all the features you need to stay productive.
                </p>
            
            </div>
   

        </div>
       
    );
};

export default LandingPage;
