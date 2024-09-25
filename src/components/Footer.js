import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer()
{
    const config  = {
        subtitle: 'I am a Full-stack developer and Designer ,I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below.',
        social: {
            twitter: '',
            facebook: 'https://www.facebook.com',
            linkedin: 'https://www.linkedin.com/in/priyanga-rajendran-31611b31a/'
        }
    }

    return <div className="bg-third">
        <div className="py-4 text-white text-center hover:text-red-300">&copy; Copyright-2024 Created by Priyanga Rajendran
            <div className="flex justify-center text-black mt-5">
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={30} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={30}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
            </div>
                        </div>
                        </div>
}