'use client';
import { useState } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import DataTable from './datatable';
import { sortItems, filterItems } from './sorting';
import clients from '@/app/data/clients.json';

export function MenuIcon({
  statement,
  price,
  icon,
}: {
  statement: string;
  price: number;
  icon: React.ReactNode;
}) {
  return (
    <>
      <ul className="menu menu-sm bg-white rounded-box w-full flex flex-row align-middle justify-center m-auto md:w-64 ">
        {/* <ul className="flex gap-2 menu-sm rounded-box w-full bg-white text-center"> */}
        {/* <ul className="flex gap-2 menu-sm rounded-box w-full bg-white text-center"> */}
        {icon}
        <div className="flex flex-col flex-grow">
          <li>
            <div className="truncate">{statement}</div>
          </li>
          <li>
            <div className="text-black font-bold">{price}</div>
          </li>
        </div>
      </ul>
    </>
  );
}
export function Earning({
  statement,
  price,
  icon,
}: {
  statement: string;
  price: string;
  icon: React.ReactNode;
}) {
  return (
    <>
      <ul className="menu menu-sm bg-white rounded-box w-full flex flex-row align-middle justify-center m-auto md:w-64 ">
        {/* <ul className="flex gap-2 menu-sm rounded-box w-full bg-white text-center"> */}
        {/* <ul className="flex gap-2 menu-sm rounded-box w-full bg-white text-center"> */}
        {icon}
        <div className="flex flex-col flex-grow">
          <li>
            <div className="truncate">{statement}</div>
          </li>
          <li>
            <div className="text-black font-bold">{price}</div>
          </li>
        </div>
      </ul>
    </>
  );
}

export function TableDataEntry({
  client,
  sortby,
}: {
  sortby: string;
  client: {
    name: string;
    location: { city: string; area: string };
    img: string;
    to: { time: string; date: string };
    from: { time: string; date: string };
    service: string;
    status: string;
  };
}) {
  return (
    <>
      <tr className="">
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td className="">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src={client.img}
                  alt="Avatar Tailwind CSS Component"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{client.name}</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        <td className="flex text-justify-center">
          <div className="flex, flex-col w-40">
            <span className="">{client.location.city}, </span> <br />
            <span className="">{client.location.area}</span>
          </div>
        </td>
        <td>{client.service}</td>
        <th>
          <div className="flex flex-col text-xs w-20">
            <span>{client.to.time}</span>
            <span>{client.to.date}</span>
          </div>
        </th>
        <th>
          <div className="flex flex-col text-xs w-20">
            <span>{client.from.time}</span>
            <span>{client.from.date}</span>
          </div>
        </th>
        <th>
          <button
            className={clsx(
              'btn btn-outline border-2 w-28 font-bold',
              client.status.toLowerCase() === 'completed'
                ? 'btn-success bg-green-50 '
                : client.status.toLowerCase() === 'cancelled'
                ? 'btn-error bg-red-50'
                : client.status.toLowerCase() === 'in process'
                ? 'btn-info bg-blue-50'
                : client.status.toLowerCase() === 'pending'
                ? 'btn-warning bg-yellow-50'
                : 'btn-neutral'
            )}
          >
            {client.status.toUpperCase()}
          </button>
        </th>
        <th>
          <div className="dropdown dropdown-top dropdown-end">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow z-100"
            >
              <li>
                <a>Delete</a>
              </li>
              <li>
                <a>Details</a>
              </li>
            </ul>
          </div>
        </th>
      </tr>
    </>
  );
}

export function SortBy({
  selectedOption,
  handleChange,
}: {
  selectedOption: string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <>
      <div>
        <select
          onChange={handleChange}
          value={selectedOption}
          className="font-semibold select max-w-xs bg-white"
        >
          <option disabled>Sort By</option>
          <option className="font-semibold" value={'name-asc'}>
            Name (A - Z){' '}
          </option>
          <option className="font-semibold" value={'name-desc'}>
            Name (Z - A)
          </option>
          <option className="font-semibold" value={'date-asc'}>
            Date(Older)
          </option>
          <option className="font-semibold" value={'date-desc'}>
            Date(Newer)
          </option>
        </select>
      </div>
    </>
  );
}

export function TypeSelect({
  selecter,
  handleChanger,
}: {
  selecter: string;
  handleChanger: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <>
      <div>
        <select
          onChange={handleChanger}
          value={selecter}
          className="select font-semibold w-full max-w-xs bg-white"
        >
          <option disabled className="font-semibold">
            Select Type
          </option>
          <option className="font-semibold" value={'all'}>
            All
          </option>
          <option className="font-semibold" value={'completed'}>
            Completed{' '}
          </option>
          <option className="font-semibold" value={'cancelled'}>
            {' '}
            Cancelled
          </option>
          <option className="font-semibold" value={'in process'}>
            In Process
          </option>
          <option className="font-semibold" value={'pending'}>
            Pending
          </option>
        </select>
      </div>
    </>
  );
}
export function Table() {
  const [selectedOption, setSelectedOption] = useState('date-asc');
  const [sortedArray, setSortedArray] = useState(
    sortItems(selectedOption, clients)
  );
  const [selectedOptioner, setSelectedOptioner] = useState('completed');
  const [sorted, setSorted] = useState(sortItems(selectedOptioner, clients));

  const handleChange = (event: any) => {
    const option = event.target.value;
    setSelectedOption(option);
    const sortedArray = sortItems(option, clients);
    setSortedArray(sortedArray);
  };
  const handleChanger = (event: any) => {
    const option = event.target.value;
    setSelectedOptioner(option);
    const sorted = filterItems(option, clients);
    setSortedArray(sorted);
  };
  return (
    <>
      <div className="mt-3 md:mt-6  flex justify-between">
        <div className="font-medium mt-4">
          Appointment <span className="text-cyan-500">Management</span>
        </div>
        <div className="flex gap-5 mt-4 mt-2:md">
          <SortBy selectedOption={selectedOption} handleChange={handleChange} />
          <TypeSelect
            selecter={selectedOptioner}
            handleChanger={handleChanger}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl">
        <div className="bg-white rounded-xl">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-gray-500">
                  <th>Customer Full Name</th>
                  <th>Branch Location</th>
                  <th>Service Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <DataTable array={sortedArray} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
