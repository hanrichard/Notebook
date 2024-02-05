```
jest.spyOn(axios, "get").mockReturnValueOnce({
  data: {
    id: 1,
    todo: 123
  }
})

```



```
export const setDatePickerValue = (label: string, value: string, index: number) => {
  // If there is only date, index will be 0
  // If there will be 2 dates, start date and end date, it will be 0, 1
  const dateInput = screen.getByLabelText(label);
  fireEvent.mouseDown(dateInput);
  fireEvent.change(dateInput, { target: { value } });
  const elementNodeListOf = document.querySelectorAll('.ant-picker-cell-selected');
  fireEvent.click(elementNodeListOf[index]);
};
```

```
import React from 'react';
import userEvent from '@testing-library/user-event';

import { setDatePickerValue } from 'test/date-test-utils';
import { render, screen } from 'test/test-utils';
import TaxableCategoriesPopup from './index';

describe('<TaxableCategoriesPopup />', () => {
  const onClose = jest.fn();
  const renderPopup = () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="add"
        records={[]}
        record={undefined}
        clientId="99"
      />
    );
  };

  it('test close operation', async () => {
    renderPopup();
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onClose).toHaveBeenCalled();
  });

  it('test submit operations with empty values', async () => {
    renderPopup();
    await taxableCategoriesPopupFieldsCheck();
    expect(await screen.findByText('Save')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Save' }));
    const valueRequired = await screen.findAllByText('The start Date is required');
    expect(valueRequired.length > 0).toBeTruthy();
  });

  it('test start date and end date, end date is before start date', async () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="add"
        records={[]}
        record={undefined}
        clientId="99"
      />
    );

    setDatePickerValue('Start Date', '12-Jan-2021', 0);
    setDatePickerValue('End Date', '12-Jan-2020', 1);

    expect(await screen.findByText("The start date can't be after the end date")).toBeInTheDocument();
    expect(await screen.findByText("The end date can't be before the start date")).toBeInTheDocument();
  });

  it('test start date and end date, start date is empty', async () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="add"
        records={[
          {
            startDate: '2021-11-03',
            taxCategory: { description: 'SOLE OWNER', code: 'O' }
          }
        ]}
        record={undefined}
        clientId="99"
      />
    );

    setDatePickerValue('End Date', '12-Jan-2020', 0);

    expect(await screen.findByText('The start Date is required')).toBeInTheDocument();
  });

  it('test start date and end date, start date is same as one of the record start date', async () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="add"
        records={[
          {
            startDate: '2021-11-03',
            endDate: '2021-11-10',
            taxCategory: { description: 'SOLE OWNER', code: 'O' }
          }
        ]}
        record={undefined}
        clientId="99"
      />
    );

    setDatePickerValue('Start Date', '04-Nov-2021', 0);

    expect(
      await screen.findByText('The start and end dates entered overlap with existing records')
    ).toBeInTheDocument();
  });

  it('test start date and end date, start date can not before 01/01/1985', async () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="add"
        records={[]}
        record={undefined}
        clientId="99"
      />
    );

    setDatePickerValue('Start Date', '04-Nov-1984', 0);

    expect(await screen.findByText("The start date can't be prior to the 1st January 1985")).toBeInTheDocument();
  });

  it('test edit', async () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="edit"
        records={[]}
        record={undefined}
        clientId="99"
      />
    );
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onClose).toHaveBeenCalled();
    await taxableCategoriesPopupFieldsCheck();
  });
  it('test delete', async () => {
    render(
      <TaxableCategoriesPopup
        open={true}
        close={onClose}
        modalType="delete"
        records={[]}
        clientId="99"
        record={{
          endDate: undefined,
          startDate: '2018-08-15',
          taxCategory: { description: 'SPECIAL TRUST', code: 'S' }
        }}
      />
    );
    userEvent.click(screen.getByRole('button', { name: 'No' }));
    expect(onClose).toHaveBeenCalled();
    expect(await screen.findByText("Are you sure you want to delete 'SPECIAL TRUST'")).toBeInTheDocument();
  });
});

const taxableCategoriesPopupFieldsCheck = async () => {
  expect(await screen.findByText('Taxable Category')).toBeInTheDocument();
  expect(await screen.findByText('Start Date')).toBeInTheDocument();
  expect(await screen.findByText('End Date')).toBeInTheDocument();
};
```

```
await screen.findByTestId('table')
```
