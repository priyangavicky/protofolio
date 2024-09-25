
export default function Contact () {

    const config = {
        email : 'priyacharvik2021@gmail.com',
        phone: '+971-507906487',
        
    }
    

    return <section id='contact' className='flex flex-col bg-primary px-5 py-40 text-white mt-0'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
       
           
    </section>
}