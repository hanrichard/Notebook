```
import { act, waitFor } from '@testing-library/react';
import flushPromises from 'flush-promises';

import { screen } from 'test/test-utils';

const assertHeading = async (heading: string) => {
  expect(await screen.findByRole('heading', { name: heading })).toBeInTheDocument();
};

const assertButton = async (label: string) => {
  expect(await screen.findByRole('button', { name: label })).toBeInTheDocument();
};

const assertLink = async (label: string) => {
  expect(await screen.findByRole('link', { name: label })).toBeInTheDocument();
};

const assertExists = async (testId: string) => {
  expect(await screen.findByTestId(testId)).toBeInTheDocument();
};

const assertNotExists = async (testId: string) => {
  await waitFor(() => {
    expect(screen.queryByTestId(testId)).toBeNull();
  });
};

const flush = async () => {
  await act(flushPromises);
  await waitFor(() => {
    console.log('waiting for page flush');
  });
};

const Page = {
  assertHeading,
  assertButton,
  assertLink,
  assertExists,
  assertNotExists,
  flush
};

export default Page;

```
