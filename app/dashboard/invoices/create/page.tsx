import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { type Customer } from '@/app/lib/definitions';
// import { fetchCustomers } from '@/app/lib/data';
const customers:Customer[] = [
  {
    "id": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    "name": "Delba de Oliveira",
    "email": "delba@oliveira.com",
    "image_url": "/customers/delba-de-oliveira.png"
  },
  {
    "id": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    "name": "Lee Robinson",
    "email": "lee@robinson.com",
    "image_url": "/customers/lee-robinson.png"
  },
  {
    "id": "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    "name": "Hector Simpson",
    "email": "hector@simpson.com",
    "image_url": "/customers/hector-simpson.png"
  }
]
export default function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}