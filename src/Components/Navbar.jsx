import React, {Fragment} from 'react'
import {AiOutlineSearch, AiOutlineFacebook, AiOutlineInstagram, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {BsChevronDown} from 'react-icons/bs';
import {Menu, Transition} from "@headlessui/react";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {

    return (

        <div className='mx-auto flex justify-between px-3'>
                <ul className='hidden md:flex text-[#bfa26a] tracking-widest'>
                <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-lg inline-flex w-full justify-center px-5 py-4 tracking-widest text-[#bfa26a] hover:text-[#d7c4a1]">
          Collection
          <BsChevronDown className="-mr-1 ml-2 h-7 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-400"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Menu.Items className="absolute z-10 mt- w-screen origin-top-right bg-black">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#d7c4a1]' : 'text-[#bfa26a]',
                    'block px-5 py-2 text-md'
                  )}
                >
                  Tutus
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#d7c4a1]' : 'text-[#bfa26a]',
                    'block px-5 py-2 text-md'
                  )}
                >
                  Leotards
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#d7c4a1]' : 'text-[#bfa26a]',
                    'block px-5 py-2 text-md'
                  )}
                >
                  Tiaras
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'text-[#d7c4a1]' : 'text-[#bfa26a]',
                      'block w-full px-5 py-2 pb-4 text-left tracking-widest'
                    )}
                  >
                    Costumes
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                    <li> <p className='text-lg flex hover:cursor-pointer hover:text-[#d7c4a1] tracking-widest'>About Us</p></li>
                    <li><p className='hover:cursor-pointer hover:text-[#d7c4a1]'><AiOutlineSearch className='w-6 h-6'/></p></li>
                </ul>
            <div className='hidden md:flex'>
                <ul className='hidden md:flex text-[#bfa26a]'>
                    <li> <p className='hover:cursor-pointer hover:text-[#d7c4a1]'><AiOutlinePhone className='w-6 h-6'/></p></li>
                    <li> <p className='hover:cursor-pointer hover:text-[#d7c4a1]'><AiOutlineMail className='w-6 h-6'/></p></li>
                    <li> <p className='hover:cursor-pointer hover:text-[#d7c4a1]'> <AiOutlineFacebook className='w-6 h-6'/></p> </li>
                    <li> <p className='hover:cursor-pointer hover:text-[#d7c4a1]'> <AiOutlineInstagram className='w-6 h-6'/></p> </li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar