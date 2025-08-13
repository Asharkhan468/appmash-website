"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

const GetStartedForm = () => {
  const [phone, setPhone] = useState("");

  const services = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Digital Marketing",
    "Other",
  ];

  const budgetRanges = [
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Can't Reveal",
  ];

  const hearAboutUsOptions = [
    "Google Search",
    "Social Media",
    "Friend/Colleague",
    "Advertisement",
    "Other",
  ];

  return (
    <div className="w-full">
      <form className="space-y-3">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral2">
            Get Started <span className="text-primary1">Today!</span>
          </h2>
          <p className="text-neutral2 mt-2 text-xl">
            Let's get start a project together
          </p>
        </div>

        {/* Name and Email */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-neutral2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900"
              required
            />
          </div>
        </div>

        {/* Phone and Interested In */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral2"
            >
              Phone Number
            </label>
            <PhoneInput
              id="phone"
              international
              defaultCountry="US"
              value={phone}
              onChange={(value) => setPhone(value || "")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="interestedIn"
              className="block text-sm font-medium text-neutral2"
            >
              Interested In
            </label>
            <div className="relative mt-1">
              <select
                id="interestedIn"
                name="interestedIn"
                className="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none  text-gray-900 appearance-none"
                required
              >
                <option value="" className="text-gray-500">
                  Select a service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-gray-900">
                    {service}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Range - Modified with badge-style radio buttons */}
        <div>
          <label className="block text-sm font-medium text-neutral2">
            Budget Range
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {budgetRanges.map((range, index) => (
              <div key={index} className="relative">
                <input
                  type="radio"
                  id={`budget-${index}`}
                  name="budgetRange"
                  value={range}
                  className="absolute opacity-0 h-0 w-0 peer"
                  required
                />
                <label
                  htmlFor={`budget-${index}`}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-pointer 
            border border-gray-300 text-gray-900
            peer-checked:bg-primary1 peer-checked:text-white peer-checked:border-primary1`}
                >
                  {range}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-neutral2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter project description..."
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  text-gray-900"
          ></textarea>
        </div>

        {/* How Hear About Us */}
        <div>
          <label
            htmlFor="hearAboutUs"
            className="block text-sm font-medium text-neutral2"
          >
            How did you hear about us?
          </label>
          <div className="relative mt-1">
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              className="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 appearance-none"
              required
            >
              <option value="" className="text-gray-500">
                Select an option
              </option>
              {hearAboutUsOptions.map((option, index) => (
                <option key={index} value={option} className="text-gray-900">
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Accept Checkbox */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              className="border-gray-300 rounded accent-primary1"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="acceptTerms" className="font-medium text-neutral2">
              I accept the terms and conditions
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary1 hover:bg-primary1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetStartedForm;
