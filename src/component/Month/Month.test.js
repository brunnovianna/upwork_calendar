import { render, screen, waitFor, jest } from '@testing-library/react';
import Month from './Month';
import { WEEK_DAY_NAMES } from './../../const';

test("Month has 7 week days", async () => {
  render(<Month fullMonth="2023-01" />);
  
  await waitFor(() => {
    const weekDaysColumnHeaders = screen.getAllByRole('columnheader');
    expect(weekDaysColumnHeaders).toHaveLength(7);
  })
   
})

describe("Month has n days", () => {
  test("Month jan 2023 has 31 days", async () => {
    render(<Month fullMonth="2023-01" />)
    await waitFor(() => {
      const days = document.querySelectorAll('.Day');
      expect(days).toHaveLength(31);
    })
    
  })

  test("Month fev 2023 has 28 days", async () => {
    render(<Month fullMonth="2023-02" />)
    await waitFor(() => {
      const days = document.querySelectorAll('.Day');
      expect(days).toHaveLength(28);
    })
    
  })
})


describe("Days matching weekdays test case", () => {
  test("jan 2023 starts at Sunday", async () => {
    const date = new Date(2023, 0, 1);
    render(<Month fullMonth="2023-01" />);

    await waitFor(() => {
      const dayNumberAtGridPositon0 = screen.getAllByRole('gridcell')[date.getDay()].querySelector('.Day__number').textContent;
      expect(dayNumberAtGridPositon0).toBe('1');
    })
    
  })

  test("feb 2023 starts at Wednesday", async () => {
    const date = new Date(2023, 1, 1);
    render(<Month fullMonth="2023-02" />);
    
    await waitFor(() => {
      const dayNumberAtGridPositon3 = screen.getAllByRole('gridcell')[date.getDay()].querySelector('.Day__number').textContent;
      expect(dayNumberAtGridPositon3).toBe('1');
    })
    
  })
})

test("Month has events", async () => {
  render(<Month fullMonth="2023-01" />);
  // Should be a good idea to mock data response to ensure the month has events
  // await document.querySelectorAll('.DateEvent__item');
  await waitFor(() => {
    const eventPlacement = document.querySelectorAll('.DateEvent__item');
    expect(eventPlacement.length).toBeTruthy();
  })
  
})