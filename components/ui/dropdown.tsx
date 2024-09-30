import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className='m-2'>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Bars3Icon className="h-4 w-4 text-gray-500" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">

          <MenuItem>
          <Link href="/about">
            <div className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              About
            </div>
          </Link>
          </MenuItem>

          <MenuItem>
            <a
              href="https://github.com/syedubaid11/tracker-jet"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Contribute
            </a>
         </MenuItem>
          
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

