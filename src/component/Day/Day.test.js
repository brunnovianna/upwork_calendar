import { render, screen } from '@testing-library/react';
import Day from './Day';

import { EVENTS } from './../../mocks/events';

const date = { year: "2023", month: "0", day: "30" };
const defaultDate = new Date(...Object.values(date));

test('Day is 30', () => {
  render(<Day date={ date } />); 

  const dayPlacement = document.querySelector('.Day .Day__number');
  expect(dayPlacement.textContent).toBe('30'); 
});

describe("Events", () => {

  test("Day has no event", () => {
    let events = [];

    render(<Day date={ date } events={ events } />);
    const eventsPlacement = document.querySelector('.Day .Day__content');
    expect(eventsPlacement).toBeEmptyDOMElement();
  });


  test("Day has one event", () => {
    const events = [{
      "text": "Pack the suitcase",
      "date": "2023-01-31"
    }];

    render(<Day date={ date } events={ events } />);
    const eventsItems = document.querySelectorAll('.Day .Day__content li');
    expect(eventsItems).toHaveLength(events.length);
  })

  test("Day has four events", () => {
    let events = [    
      {
        "text": "Happy new Year!",
        "date": "2023-01-31"
      }, {
        "text": "Pack the suitcase",
        "date": "2023-01-31"
      }, {
        "text": "Travel to Brazil",
        "date": "2023-01-31"
      }, {
        "text": "Team meeting",
        "date": "2023-01-31"
      }];

    render(<Day date={ date } events={ events } />);
    const eventsItems = document.querySelectorAll('.Day .Day__content li');
    expect(eventsItems).toHaveLength(events.length);
  })
})

test("May add event to a day", async () => {
  render(<Day date={ date } />);
  expect(screen.getByText('+')).toBeInTheDocument();
})