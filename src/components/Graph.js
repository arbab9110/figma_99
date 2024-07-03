import React from 'react';
import './Graph.css';
import { FaBell, FaCalendarAlt, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Chart from './Chart';

const Graph = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="graph">
      <header className="header">
        <FaBell className="icon" />
        <input type="text" placeholder="Search here" className="search-input" />
      </header>
      <div className='available'> 
      <section className="car-availability">
        <h2 className='car-head'>Car Availability</h2>
        <div className="availability-controls">
          <select className="car-select">
            <option>Car number</option>
            <option>Chasis Number</option>
            <option>Engine Number</option>
            <option>Registration Number</option>
            
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            className="date-picker"
          />
          <div className="time-picker">
            <FaClock />
            <input type="time" className="time-input" />
          </div>
          <button className="check-button">Check</button>
        </div>
      </section>
      </div>
      <div className='live-div'>
      <section className="live-car-status">
        <h2 className='liv-head'>Live Car Status</h2>
        <table className="status-table">
          <thead>
            <tr>
              <th>No.</th>
              <th className='th-2'>Car no.</th>
              <th className='th-3'>Driver</th>
              <th className='th-4' >Status</th>
              <th className='th-5'>Earning</th>
              <th className='th-6'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td className='td-12'>6465</td>
              <td className='td-13'>Alex Noman</td>
              <td className="status completed">Completed</td>
              <td className='td-15'>$35.44</td>
              <td><button className="details-button">Details</button></td>
            </tr>
            <tr>
              <td>02</td>
              <td className='td-22'>5665</td>
              <td className='td-23'>Razib Rahman</td>
              <td className="status pending">Pending</td>
              <td className='td-25'>$0.00</td>
              <td><button className="details-button">Details</button></td>
            </tr>
            <tr>
              <td>03</td>
              <td className='td-32'>1755</td>
              <td className='td-33'>Luke Norton</td>
              <td className="status in-route">In route</td>
              <td className='td-35'>$23.50</td>
              <td><button className="details-button">Details</button></td>
            </tr>
          </tbody>
        </table>
      </section>
      </div>
      <div className='summary'>
      <section className="earning-summary">
        <h2 className='summer-head'>Earning Summary</h2>
        <Chart />
      </section>
      </div>
    </div>
  );
};

export default Graph;
