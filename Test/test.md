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
