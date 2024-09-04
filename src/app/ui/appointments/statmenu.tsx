import { UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import {MenuIcon} from '@/app/ui/appointments/components';

export default function MenuStat() {
  return (
     <div className="md:gap-6 gap-2 lg:flex justify-center text-gray-500  grid grid-cols-2 grid-rows-2">
     {/* <div className="md:gap-6 text-gray-500 flex "> */}
    {/* // <div className="flex flex-wrap gap-2 text-gray-500 justify-evenly"> */}
    {/* // <div className="grid grid-cols-2 grid-rows-2 md:flex flex-wrap md:no-wrap gap-2 p-2 text-gray-500 md:gap-4 lg:gap-6 md:justify-evenly md:flex-wrap-reverse"> */}
      <MenuIcon
        statement={'Total Appointments'}
        price={'100'}
        icon={<UsersIcon className="h-10 m-auto md:block hidden" />}
      />
      <MenuIcon
        statement={'Completed Appointmens'}
        price={'70'}
        icon={<UsersIcon className="h-10 m-auto md:block hidden" />}
      />
      <MenuIcon
        statement={'Cancelled Appointments'}
        price={'30'}
        icon={<UsersIcon className="h-10 m-auto md:block hidden" />}
      />
      <MenuIcon
        statement={'Total Earning'}
        price={'10,000 Rs'}
        icon={<CurrencyDollarIcon className="h-10 mt-auto md:block hidden" />}
      />
    </div>
  );
}
