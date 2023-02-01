import { render, screen } from '@testing-library/react';
import DateEvent from './DateEvent';

test('Event is "Birthday"', () => {
  render(<DateEvent events={[{"text": "Birthday"}]} />); 
  const eventPlacement = document.querySelector('.DateEvent__item');
  expect(eventPlacement.textContent).toBe('Birthday'); 
});