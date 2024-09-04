'use-client';
import { Table } from '@/app/ui/appointments/components';
import Pagination from '@/app/ui/appointments/pagination';
import MenuStat from '@/app/ui/appointments/statmenu';

export default function page() {
  return (
    <div className="">
      <div className="md:p-10 bg-gray-100 gap-5 flex flex-col">
        <div className="mb-0">
          <MenuStat />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Table />
      </div>
      <div className="flex w-full justify-end mt-4">
        <Pagination />
      </div>
    </div>
  );
}
