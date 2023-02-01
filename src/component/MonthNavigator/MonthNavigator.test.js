import { fireEvent, render, screen } from '@testing-library/react';
import MonthNavigator from './MonthNavigator';

describe("Navigator year and month correctness", () => {
  test("Year 2023", () => {
    render(<MonthNavigator fullMonth="2023-01" />)
    const year = document.querySelector('.MonthNavigator__year-changer-button');
    expect(year.textContent).toBe("2023");
  })

  test("Month Jan", () => {
    render(<MonthNavigator fullMonth="2023-01" />)
    const month = document.querySelector('.MonthNavigator__month-changer-button');
    expect(month.textContent).toBe("Jan");
  })
})

describe("Navigation between prev and next months", () => {
  test("Navigate from Jan to Feb", () => {
    render(<MonthNavigator fullMonth="2023-01" />)
    const monthSelector = document.querySelector('.MonthNavigator__month-changer-button');

    expect(monthSelector.textContent).toBe("Jan");

    fireEvent.click(document.querySelector(".MonthNavigator__next-changer-button"))
    expect(monthSelector.textContent).not.toBe("Jan");
  })

  test("Navigate from Feb to Jan", () => {
    render(<MonthNavigator fullMonth="2023-02" />)
    const monthSelector = document.querySelector('.MonthNavigator__month-changer-button');

    expect(monthSelector.textContent).toBe("Feb");

    fireEvent.click(document.querySelector(".MonthNavigator__next-changer-button"))
    expect(monthSelector.textContent).not.toBe("Jan");
  })

  test("Navigate between year's adge months also change year", () => {
    render(<MonthNavigator fullMonth="2023-01" />)
    const monthSelector = document.querySelector('.MonthNavigator__month-changer-button'),
          yearSelector = document.querySelector('.MonthNavigator__year-changer-button');

    expect(monthSelector.textContent).toBe("Jan");
    expect(yearSelector.textContent).toBe("2023");

    fireEvent.click(document.querySelector(".MonthNavigator__prev-changer-button"))
    expect(monthSelector.textContent).toBe("Dec");
    expect(yearSelector.textContent).toBe("2022");

    fireEvent.click(document.querySelector(".MonthNavigator__next-changer-button"))
    expect(monthSelector.textContent).toBe("Jan");
    expect(yearSelector.textContent).toBe("2023");
  })
})