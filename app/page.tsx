import React from 'react';
import '@/app/globals.css';

function home() {
  return (
  <>
  <div className='flex justify-center m-8'>
    <h1 className="font-bold text-3xl p-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl text-white">Welcome to My Class Schedule!</h1>
  </div>
  <div className='flex justify-center'>
    <table className='table-fixed' border={10}>
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>8.30-9.30</th>
          <th>9.30-10.30</th>
          <th>10.30-11.30</th>
          <th>11.30-12.30</th>
          <th>12.30-13.30</th>
          <th>13.30-14.30</th>
          <th>14.30-15.30</th>
          <th>15.30-16.30</th>
          <th>16.30-17.30</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='bg-amber-200 font-bold'>Monday</td>
          <td className='bg-blue-200' colSpan={2}>CPE241<br/>CB2601</td>
          <td className='bg-green-200' colSpan={2}>TA CPE121<br/>CPE1115</td>
          <td className='bg-gray-200'></td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td className='bg-pink-200 font-bold'>Tuesday</td>
          <td> </td>
          <td className='bg-orange-200' colSpan={3}>STA302<br/>SCL216</td>
          <td className='bg-gray-200'></td>
          <td className='bg-blue-200' colSpan={2}>CPE241<br/>CPE1113</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td className='bg-lime-200 font-bold'>Wednesday</td>
          <td className='bg-violet-200' colSpan={4}>CPE223<br/>CB2605</td>
          <td className='bg-gray-200'></td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td className='bg-orange-300 font-bold'>Thursday</td>
          <td> </td>
          <td className='bg-red-200' colSpan={3}>GEN111<br/>ONLINE</td>
          <td className='bg-gray-200'></td>
          <td className='bg-yellow-100' colSpan={3}>GEN321<br/>ONLINE</td>
          <td> </td>
        </tr>
        <tr>
          <td className='bg-sky-300 font-bold'>Friday</td>
          <td className='bg-sky-200' colSpan={4}>CPE232<br/>CB2607</td>
          <td className='bg-gray-200'></td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
      </tbody>
    </table>
  </div>
  </>
  )
}

export default home;