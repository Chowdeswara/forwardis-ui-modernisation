
import React from 'react';
import { Calendar, Search, Copy, Link, FileText } from 'lucide-react';

export const TripForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 w-full">
      {/* Entry Type Selection */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
        <div className="flex items-center space-x-6 mb-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="entryType" defaultChecked className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Single Entry</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="entryType" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Bulk Entry</span>
          </label>
        </div>
        
        <div className="relative">
          <input
            type="text"
            value="TRIP00000001"
            className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
        </div>
      </div>
      
      {/* Trip Details */}
      <div className="mb-6">
        <div className="flex items-center gap-6 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">TRIP00000001</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            Initiated
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1.5C15.1056 1.50024 19.0678 5.97574 18.4336 11.0625C17.9095 15.2624 14.3154 18.4998 10 18.5C5.30008 18.5 1.5 14.6743 1.5 10C1.5 5.3095 5.30203 1.5 10 1.5ZM8.46094 14.5C8.38595 15.3995 8.24336 16.3788 8.0791 17.251C9.33393 17.5828 10.6667 17.5823 11.9199 17.251C11.7561 16.3814 11.6132 15.4012 11.5381 14.5H8.46094ZM14.3369 11.0732C13.2225 11.0732 12.9199 11.2873 12.8535 11.3535C12.8498 11.3572 12.8463 11.3603 12.8418 11.3652C12.7209 11.4978 12.397 12.0381 12.502 13.9395C12.5044 13.9592 12.5059 13.9796 12.5059 14C12.5053 13.995 12.5553 15.1591 12.8779 16.9277C15.1984 15.9617 16.901 13.8695 17.3691 11.3994C16.4277 11.2291 15.2867 11.0733 14.3369 11.0732ZM6.48828 11.125C5.41927 10.9659 3.69268 11.205 2.63086 11.3994C3.099 13.8693 4.80085 15.9607 7.12109 16.9268C7.24318 16.2569 7.4318 15.0936 7.49609 13.9717C7.60628 12.0479 7.28023 11.5008 7.1582 11.3662C7.02953 11.224 6.67929 11.1534 6.48828 11.125ZM2.92676 7.5C2.59343 8.44168 2.45869 9.4255 2.51074 10.4033C3.44304 10.2352 4.53656 10.0904 5.4873 10.0742C6.28913 10.0617 7.37476 10.1108 7.9043 10.7002C8.48276 11.347 8.53427 12.63 8.51562 13.5H11.4844C11.4654 12.6154 11.5167 11.2756 12.1455 10.6465C12.5369 10.2551 13.2338 10.0723 14.3369 10.0723C15.3318 10.0723 16.5176 10.228 17.4883 10.4033C17.5404 9.42556 17.4056 8.44172 17.0723 7.5H2.92676ZM10 8.5C10.8269 8.50022 11.5 9.17304 11.5 10C11.5 10.827 10.8269 11.4998 10 11.5C9.17294 11.5 8.5 10.8271 8.5 10C8.5 9.1729 9.17294 8.5 10 8.5ZM10 9.5C9.72431 9.5 9.5 9.7243 9.5 10C9.5 10.2757 9.72431 10.5 10 10.5C10.2755 10.4998 10.5 10.2756 10.5 10C10.5 9.72444 10.2755 9.50022 10 9.5ZM10 2.5C7.18329 2.5 4.65355 4.0474 3.36426 6.5H16.6348C15.3455 4.04753 12.8165 2.50015 10 2.5Z" fill="#475467"/>
                <path d="M10 1.5C15.1056 1.50024 19.0678 5.97574 18.4336 11.0625C17.9095 15.2624 14.3154 18.4998 10 18.5C5.30008 18.5 1.5 14.6743 1.5 10C1.5 5.3095 5.30203 1.5 10 1.5ZM8.46094 14.5C8.38595 15.3995 8.24336 16.3788 8.0791 17.251C9.33393 17.5828 10.6667 17.5823 11.9199 17.251C11.7561 16.3814 11.6132 15.4012 11.5381 14.5H8.46094ZM14.3369 11.0732C13.2225 11.0732 12.9199 11.2873 12.8535 11.3535C12.8498 11.3572 12.8463 11.3603 12.8418 11.3652C12.7209 11.4978 12.397 12.0381 12.502 13.9395C12.5044 13.9592 12.5059 13.9796 12.5059 14C12.5053 13.995 12.5553 15.1591 12.8779 16.9277C15.1984 15.9617 16.901 13.8695 17.3691 11.3994C16.4277 11.2291 15.2867 11.0733 14.3369 11.0732ZM6.48828 11.125C5.41927 10.9659 3.69268 11.205 2.63086 11.3994C3.099 13.8693 4.80085 15.9607 7.12109 16.9268C7.24318 16.2569 7.4318 15.0936 7.49609 13.9717C7.60628 12.0479 7.28023 11.5008 7.1582 11.3662C7.02953 11.224 6.67929 11.1534 6.48828 11.125ZM2.92676 7.5C2.59343 8.44168 2.45869 9.4255 2.51074 10.4033C3.44304 10.2352 4.53656 10.0904 5.4873 10.0742C6.28913 10.0617 7.37476 10.1108 7.9043 10.7002C8.48276 11.347 8.53427 12.63 8.51562 13.5H11.4844C11.4654 12.6154 11.5167 11.2756 12.1455 10.6465C12.5369 10.2551 13.2338 10.0723 14.3369 10.0723C15.3318 10.0723 16.5176 10.228 17.4883 10.4033C17.5404 9.42556 17.4056 8.44172 17.0723 7.5H2.92676ZM10 8.5C10.8269 8.50022 11.5 9.17304 11.5 10C11.5 10.827 10.8269 11.4998 10 11.5C9.17294 11.5 8.5 10.8271 8.5 10C8.5 9.1729 9.17294 8.5 10 8.5ZM10 9.5C9.72431 9.5 9.5 9.7243 9.5 10C9.5 10.2757 9.72431 10.5 10 10.5C10.2755 10.4998 10.5 10.2756 10.5 10C10.5 9.72444 10.2755 9.50022 10 9.5ZM10 2.5C7.18329 2.5 4.65355 4.0474 3.36426 6.5H16.6348C15.3455 4.04753 12.8165 2.50015 10 2.5Z" stroke="#475467" stroke-width="0.1px"/>
              </svg>
            </span>
            <span>46363738 (DriverABC)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.91634 18.3332H12.083M6.66634 1.6665H13.333M9.99967 4.1665V1.6665M3.33301 9.99984H16.6663M14.1663 15.8332L15.4163 18.3332M5.83301 15.8332L4.58301 18.3332M7.08301 12.9165H7.09134M12.9163 12.9165H12.9247M7.33301 15.8332H12.6663C14.0665 15.8332 14.7665 15.8332 15.3013 15.5607C15.7717 15.321 16.1542 14.9386 16.3939 14.4681C16.6663 13.9334 16.6663 13.2333 16.6663 11.8332V8.1665C16.6663 6.76637 16.6663 6.06631 16.3939 5.53153C16.1542 5.06112 15.7717 4.67867 15.3013 4.43899C14.7665 4.1665 14.0665 4.1665 12.6663 4.1665H7.33301C5.93288 4.1665 5.23281 4.1665 4.69803 4.43899C4.22763 4.67867 3.84517 5.06112 3.60549 5.53153C3.33301 6.06631 3.33301 6.76637 3.33301 8.1665V11.8332C3.33301 13.2333 3.33301 13.9334 3.60549 14.4681C3.84517 14.9386 4.22763 15.321 4.69803 15.5607C5.23281 15.8332 5.93288 15.8332 7.33301 15.8332ZM7.49967 12.9165C7.49967 13.1466 7.31313 13.3332 7.08301 13.3332C6.85289 13.3332 6.66634 13.1466 6.66634 12.9165C6.66634 12.6864 6.85289 12.4998 7.08301 12.4998C7.31313 12.4998 7.49967 12.6864 7.49967 12.9165ZM13.333 12.9165C13.333 13.1466 13.1465 13.3332 12.9163 13.3332C12.6862 13.3332 12.4997 13.1466 12.4997 12.9165C12.4997 12.6864 12.6862 12.4998 12.9163 12.4998C13.1465 12.4998 13.333 12.6864 13.333 12.9165Z" stroke="#475467" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>Train No.</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.0003 12.9167H6.25033C5.08736 12.9167 4.50587 12.9167 4.03271 13.0602C2.96737 13.3834 2.13369 14.217 1.81053 15.2824C1.66699 15.7555 1.66699 16.337 1.66699 17.5M13.3337 15L15.0003 16.6667L18.3337 13.3333M12.0837 6.25C12.0837 8.32107 10.4047 10 8.33366 10C6.26259 10 4.58366 8.32107 4.58366 6.25C4.58366 4.17893 6.26259 2.5 8.33366 2.5C10.4047 2.5 12.0837 4.17893 12.0837 6.25Z" stroke="#475467" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>10009173 (Hungary Agent)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.58366 4.1665H9.94566C12.485 4.1665 13.7547 4.1665 14.2367 4.62258C14.6533 5.01681 14.8379 5.59757 14.7255 6.16001C14.5953 6.81068 13.5587 7.54388 11.4856 9.01028L8.09843 11.4061C6.02525 12.8725 4.98865 13.6057 4.85852 14.2563C4.74604 14.8188 4.93067 15.3995 5.34729 15.7938C5.82927 16.2498 7.09896 16.2498 9.63833 16.2498H10.417M6.66699 4.1665C6.66699 5.54722 5.5477 6.6665 4.16699 6.6665C2.78628 6.6665 1.66699 5.54722 1.66699 4.1665C1.66699 2.78579 2.78628 1.6665 4.16699 1.6665C5.5477 1.6665 6.66699 2.78579 6.66699 4.1665ZM18.3337 15.8332C18.3337 17.2139 17.2144 18.3332 15.8337 18.3332C14.4529 18.3332 13.3337 17.2139 13.3337 15.8332C13.3337 14.4525 14.4529 13.3332 15.8337 13.3332C17.2144 13.3332 18.3337 14.4525 18.3337 15.8332Z" stroke="#475467" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>1000km</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99967 10.8332C11.3804 10.8332 12.4997 9.71388 12.4997 8.33317C12.4997 6.95246 11.3804 5.83317 9.99967 5.83317C8.61896 5.83317 7.49967 6.95246 7.49967 8.33317C7.49967 9.71388 8.61896 10.8332 9.99967 10.8332Z" stroke="#0068CF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.99967 18.3332C13.333 14.9998 16.6663 12.0151 16.6663 8.33317C16.6663 4.65127 13.6816 1.6665 9.99967 1.6665C6.31778 1.6665 3.33301 4.65127 3.33301 8.33317C3.33301 12.0151 6.66634 14.9998 9.99967 18.3332Z" stroke="#0068CF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span>53-202705, Voila</span>
            </div>
            <span className="text-gray-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_33517_22353)">
                <path d="M7.99967 10.6668V8.00016M7.99967 5.3335H8.00634M14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C11.6816 1.3335 14.6663 4.31826 14.6663 8.00016Z" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_33517_22353">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center space-x-3">
              <span className="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99967 10.8332C11.3804 10.8332 12.4997 9.71388 12.4997 8.33317C12.4997 6.95246 11.3804 5.83317 9.99967 5.83317C8.61896 5.83317 7.49967 6.95246 7.49967 8.33317C7.49967 9.71388 8.61896 10.8332 9.99967 10.8332Z" stroke="#D92D20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.99967 18.3332C13.333 14.9998 16.6663 12.0151 16.6663 8.33317C16.6663 4.65127 13.6816 1.6665 9.99967 1.6665C6.31778 1.6665 3.33301 4.65127 3.33301 8.33317C3.33301 12.0151 6.66634 14.9998 9.99967 18.3332Z" stroke="#D92D20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span>53-21925-3, Curtici</span>
            </div>
            <span className="text-gray-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_33517_22353)">
                <path d="M7.99967 10.6668V8.00016M7.99967 5.3335H8.00634M14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C11.6816 1.3335 14.6663 4.31826 14.6663 8.00016Z" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_33517_22353">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Date Fields */}
      <div className="mb-6 grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Planned Start Date 
          </label>
          <div className="text-sm font-medium text-gray-600">
            <span>25-Mar-2025 09:11 PM</span>
          </div>
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Planned End Date 
          </label>
          <div className="text-sm font-medium text-gray-600">
            <span>27-Mar-2025 09:11 PM</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Actual Start Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value="28-Mar-2025 09:11"
              className="w-full h-10 px-3 pr-8 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Actual End Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value="29-Mar-2025 09:11"
              className="w-full h-10 px-3 pr-8 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-center gap-4">
          <button className="w-9 h-9 bg-white-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-300">
            {/* <FileText size={16} className="text-gray-600" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_33517_17186)">
              <path d="M9.3336 1.51318V4.26685C9.3336 4.64022 9.3336 4.8269 9.40626 4.9695C9.47018 5.09494 9.57216 5.19693 9.6976 5.26085C9.84021 5.33351 10.0269 5.33351 10.4003 5.33351H13.1539M10.6669 8.66676H5.33363M10.6669 11.3334H5.33363M6.66696 6.00012H5.33363M9.3336 1.3335H5.86696C4.74687 1.3335 4.18682 1.3335 3.759 1.55148C3.38268 1.74323 3.07672 2.04918 2.88498 2.42551C2.66699 2.85332 2.66699 3.41337 2.66699 4.53347V11.4667C2.66699 12.5868 2.66699 13.1469 2.88498 13.5747C3.07672 13.951 3.38268 14.257 3.759 14.4487C4.18682 14.6667 4.74687 14.6667 5.86696 14.6667H10.1336C11.2537 14.6667 11.8137 14.6667 12.2416 14.4487C12.6179 14.257 12.9238 13.951 13.1156 13.5747C13.3336 13.1469 13.3336 12.5868 13.3336 11.4667V5.33346L9.3336 1.3335Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_33517_17186">
              <rect width="15.9999" height="15.9999" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
          <button className="w-9 h-9 bg-white-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-300">
            {/* <Link size={16} className="text-gray-600" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_33517_22102)">
              <path d="M8.00028 8.66676C9.10484 8.66676 10.0003 7.77134 10.0003 6.66678C10.0003 5.56222 9.10484 4.6668 8.00028 4.6668C6.89572 4.6668 6.0003 5.56222 6.0003 6.66678C6.0003 7.77134 6.89572 8.66676 8.00028 8.66676Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.00028 14.6667C10.6669 12.0001 13.3336 9.61227 13.3336 6.66678C13.3336 3.72129 10.9458 1.3335 8.00028 1.3335C5.05479 1.3335 2.66699 3.72129 2.66699 6.66678C2.66699 9.61227 5.33363 12.0001 8.00028 14.6667Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_33517_22102">
              <rect width="15.9999" height="15.9999" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
          <button className="w-9 h-9 bg-white-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-300">
            {/* <FileText size={16} className="text-gray-600" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_33517_22126)">
              <path d="M14.6662 8.0001C14.6662 11.682 11.6815 14.6667 7.99961 14.6667C4.31775 14.6667 1.33301 11.682 1.33301 8.0001M14.6662 8.0001C14.6662 4.31824 11.6815 1.3335 7.99961 1.3335M14.6662 8.0001H12.9996M1.33301 8.0001C1.33301 4.31824 4.31775 1.3335 7.99961 1.3335M1.33301 8.0001H2.99966M7.99961 1.3335V3.00015M12.7185 3.33348L8.99954 7.00011M12.7185 12.719L12.5826 12.5831C12.1214 12.1219 11.8908 11.8913 11.6217 11.7264C11.3831 11.5802 11.123 11.4724 10.8509 11.4071C10.544 11.3334 10.2178 11.3334 9.56561 11.3334L6.4336 11.3334C5.78137 11.3334 5.45525 11.3334 5.14835 11.4071C4.87626 11.4724 4.61614 11.5802 4.37756 11.7264C4.10845 11.8913 3.87785 12.1219 3.41665 12.5831L3.28074 12.719M3.28074 3.33348L4.43837 4.4911M9.33294 8.0001C9.33294 8.73648 8.73599 9.33342 7.99961 9.33342C7.26324 9.33342 6.66629 8.73648 6.66629 8.0001C6.66629 7.26373 7.26324 6.66678 7.99961 6.66678C8.73599 6.66678 9.33294 7.26373 9.33294 8.0001Z" stroke="#475467" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_33517_22126">
              <rect width="15.9999" height="15.9999" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
