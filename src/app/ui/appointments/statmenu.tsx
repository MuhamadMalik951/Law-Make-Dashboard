import { UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { MenuIcon, Earning } from '@/app/ui/appointments/components';
import clients from '@/app/data/clients.json';
export default function MenuStat() {
  function count(array: any, appointments: string) {
    if(appointments.toLowerCase() === 'completed') {
      const blahArray = array.filter((item) => (item.status).toLowerCase() === appointments ? item : 0 )
      return blahArray.length
    }
    if(appointments.toLowerCase() === 'earning') {
      const blahArray = array.filter((item) => (item.status).toLowerCase() === 'completed' ? item : 0 )
      return blahArray.length * 100
    }
    else if(appointments.toLowerCase() === 'cancelled') {
      const blahArray = array.filter((item) => item.status.toLowerCase() === appointments ? item : 0 )
      return blahArray.length
    }

  }
  return (
    <div className="md:gap-6 gap-2 lg:flex justify-center text-gray-500  grid grid-cols-2 grid-rows-2">
      {/* <div className="md:gap-6 text-gray-500 flex "> */}
      {/* // <div className="flex flex-wrap gap-2 text-gray-500 justify-evenly"> */}
      {/* // <div className="grid grid-cols-2 grid-rows-2 md:flex flex-wrap md:no-wrap gap-2 p-2 text-gray-500 md:gap-4 lg:gap-6 md:justify-evenly md:flex-wrap-reverse"> */}
      <MenuIcon
        statement={'Total Appointments'}
        price={clients.length}
        icon={<UsersIcon className="h-10 m-auto md:block hidden" />}
      />
      <MenuIcon
        statement={'Completed Appointmens'}
        price={count(clients, 'completed')}
        icon={<UsersIcon className="h-10 m-auto md:block hidden" />}
      />
      <MenuIcon
        statement={'Cancelled Appointments'}
        price={count(clients, 'cancelled')}
        icon={<UsersIcon className="h-10 m-auto md:block hidden" />}
      />
      <Earning
        statement={'Total Earning'}
        price={count(clients, 'earning') + '$'}
        icon={<CurrencyDollarIcon className="h-10 mt-auto md:block hidden" />}
      />
    </div>
  );
}
