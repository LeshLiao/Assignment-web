import { useContext } from 'react';
import { DataContext } from './DataContext.jsx';
import './MyTable.css'

export default function MyTable() {
  const data = useContext(DataContext);

  return (
    <table className="my-table">
    <thead>
      <tr>
        <th colSpan="2">{data.title}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Full name</td>
        <td>{data.fullName}</td>
      </tr>
      <tr>
        <td>Date of birth</td>
        <td>{data.dateOfBirth}</td>
      </tr>
      <tr>
        <td>Place of birth</td>
        <td>{data.placeOfBirth}</td>
      </tr>
      <tr>
        <td colSpan="2">Do you miss {data.placeOfBirth}?</td>
      </tr>
    </tbody>
    </table>
  )
}
