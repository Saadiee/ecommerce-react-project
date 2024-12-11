import {assets} from "../assets/assets.js";

function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt=""/>
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam nostrum quibusdam quis! Impedit sapiente tempore vel. Earum hic nobis vero?</p>
                </div>

                <div>
                    <p className='font-medium mb-5 text-xl'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-234-567890</li>
                        <li>contact@forever.com</li>
                    </ul>
                </div>

            </div>

            <hr/>

            <div>
                <p className='py-5 text-sm text-center'>Copyright 2024&copy; forever.com - All Rights Reserved</p>
            </div>

        </div>
    );
}

export default Footer;