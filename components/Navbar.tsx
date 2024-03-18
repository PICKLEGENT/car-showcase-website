import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '.';

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4 bg-transparent'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo-new.svg'
                        alt='AR23 CarHub Logo'
                        width={200}
                        height={18}
                        className='object-contain'
                    />
                </Link>
                <CustomButton
                    title='Sing In'
                    btnType='button'
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                />
            </nav>
        </header>
    )
}

export default Navbar