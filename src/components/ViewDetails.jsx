import React, { useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ViewDetails({ employee, onClose }) {
  const [selectedAction, setSelectedAction] = useState('');

  // Fallback for profile picture if employee.profilePic is not available
  const profileInitial = employee.name ? employee.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'NA';

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-1 font-inter">
      <div className="bg-white rounded-lg shadow-xl max-w-8xl w-full max-h-[98vh] min-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-red-500 transition duration-200"
          aria-label="Close"
        >
          <IoIosCloseCircleOutline className="w-6 h-6" />
        </button>

        <br />
        <br />

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Employee Profile and Probation Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Employee Profile Card - Changed border color */}
              <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-5xl mx-auto border border-[#978d8d]">
                {/* 4-Column Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-sm">
                  {/* Column 1: Profile photo, Name, Role */}
                  <div className="flex flex-col items-center sm:items-start lg:col-span-1">
                    <div className="relative mb-4">
                      <img
                        src={employee.profilePic || `https://placehold.co/100x100/E0F2F7/000000?text=${profileInitial}`}
                        alt={employee.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/100x100/E0F2F7/000000?text=${profileInitial}`;
                        }}
                      />
                      <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 text-center sm:text-left">{employee.name}</h2>
                    <p className="text-sm text-gray-600 text-center sm:text-left">{employee.role}</p>
                  </div>

                  {/* Column 2: Employee ID, Department, Joining Date */}
                  <div className="lg:col-span-1">
                    <div>
                      <p className="text-gray-500">Employee ID</p>
                      <p className="font-medium text-gray-800">{employee.id}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-500">Department</p>
                      <p className="font-medium text-blue-600">{employee.department}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-500">Joining Date</p>
                      <p className="font-medium text-gray-800">{employee.dateOfJoining}</p>
                    </div>
                  </div>

                  {/* Column 3: Contact No, R1 Manager, Project/Cost Centre */}
                  <div className="lg:col-span-1">
                    <div>
                      <p className="text-gray-500">Contact No</p>
                      <p className="font-medium text-gray-800">{employee.phoneNumber}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-500">R1 Manager</p>
                      <p className="font-medium text-blue-600">{employee.rsManager}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-500">Project / Cost Centre</p>
                      <p className="font-medium text-blue-600">Kavery</p>
                    </div>
                  </div>

                  {/* Column 4: Email, Location */}
                  <div className="lg:col-span-1">
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="font-medium text-blue-600 whitespace-nowrap overflow-hidden text-ellipsis">{employee.email}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-500">Location</p>
                      <p className="font-medium text-gray-800">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Probation Details Card - Changed border color */}
              <div className="bg-white  shadow-md p-6 border border-[#978d8d]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Probation Days</span>
                    <span className="font-medium text-gray-800">{parseInt(employee.probationDays)}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Status</span>
                    <span className="font-medium text-gray-800">{employee.status}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Probation Extended (No of Times)</span>
                    <span className="font-medium text-gray-800">{employee.probationExtendedNoOfTimes}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Actual Probation End Date</span>
                    <span className="font-medium text-gray-800">{employee.actualProbationEndDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Current Probation End Date</span>
                    <span className="font-medium text-gray-800">{employee.currentProbationEndDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Due for confirmation (Days)</span>
                    <span className="font-medium text-gray-800">{employee.confirmationOverdueDays}</span>
                  </div>
                </div>
              </div>

              {/* Probation Evaluation Form - Changed border color */}
              <div className="bg-white shadow-md p-6 flex flex-col md:flex-row items-center justify-between border border-[#978d8d]">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-gray-800 font-medium mr-1">Probation Evaluation and confirmation form</span>
                  <span className="text-red-500 text-lg">*</span>
                </div>
                <button className="px-6 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200">
                  View & Fill
                </button>
              </div>

              {/* Action Selection - This card doesn't appear in the provided image snippets with the desired border/shadow, so keeping original. */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="action"
                      value="confirm"
                      checked={selectedAction === 'confirm'}
                      onChange={handleActionChange}
                      className="form-radio h-4 w-4 text-blue-600 transition-colors duration-200"
                    />
                    <span className="ml-2 text-gray-700">Confirm</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="action"
                      value="extend"
                      checked={selectedAction === 'extend'}
                      onChange={handleActionChange}
                      className="form-radio h-4 w-4 text-blue-600 transition-colors duration-200"
                    />
                    <span className="ml-2 text-gray-700">Extend Probation</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="action"
                      value="terminate"
                      checked={selectedAction === 'terminate'}
                      onChange={handleActionChange}
                      className="form-radio h-4 w-4 text-blue-600 transition-colors duration-200"
                    />
                    <span className="ml-2 text-gray-700">Terminate Service</span>
                  </label>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.542 2.503-1.542 3.268 0l7.556 15.113c.754 1.508-.242 3.237-1.806 3.237H2.492c-1.564 0-2.56-1.729-1.806-3.237L8.257 3.099zM10 11a1 1 0 100-2 1 1 0 000 2zm-1 4a1 1 0 102 0 1 1 0 00-2 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">
                    <span className="font-semibold">Note:</span> Fill the Probation Evaluation confirmation form to submit
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center md:justify-end space-x-4 mt-6">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200">
                  Submit
                </button>
              </div>
            </div>

            {/* Right Column: Timeline - Changed border color */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 border border-[#978d8d]">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Timeline</h3>

              {/* Accepted Status */}
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700 font-bold rounded-full flex items-center justify-center text-sm mr-3">
                  {employee.rsManager ? employee.rsManager.split(' ').map(n => n[0]).join('').toUpperCase() : 'AS'}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Accepted</p>
                  <p className="text-sm text-gray-600">With {employee.rsManager}</p>
                </div>
              </div>

              {/* Comment Box */}
              <div className="mb-6">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  rows="3"
                  placeholder="Add your comment here ......."
                ></textarea>
              </div>

              {/* Probation Extension Entries (Dynamic based on probationExtendedNoOfTimes) */}
              <div className="space-y-6">
                {Array.from({ length: parseInt(employee.probationExtendedNoOfTimes) || 0 }).map((_, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center text-sm mr-3">
                      {employee.rsManager ? employee.rsManager.split(' ').map(n => n[0]).join('').toUpperCase() : 'HK'}
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800">Probation Extension {parseInt(employee.probationExtendedNoOfTimes) - index}</p>
                      <p className="text-sm text-gray-600">With {employee.rsManager}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">
                          {
                            (() => {
                              const joinDate = new Date(employee.dateOfJoining.split('/').reverse().join('-')); // Changed to handle DD/MM/YYYY
                              const probationDays = parseInt(employee.probationDays);
                              let extendedDate = new Date(joinDate.setDate(joinDate.getDate() + probationDays));
                              for (let i = 0; i < parseInt(employee.probationExtendedNoOfTimes) - index; i++) {
                                extendedDate.setDate(extendedDate.getDate() + 30); // Assuming each extension is 30 days
                              }
                              return `${extendedDate.toLocaleDateString('en-GB')} 30 Days`;
                            })()
                          }
                        </span>
                        <button className="px-3 py-1 text-blue-600 border border-blue-500 rounded-md text-xs hover:bg-blue-50 transition-colors duration-200">
                          View Feedback {parseInt(employee.probationExtendedNoOfTimes) - index}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}