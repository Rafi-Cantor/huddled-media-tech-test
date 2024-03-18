import React, {useEffect, useState}  from "react";
import tflRequest from "../apis/apis";
import { Link } from 'react-router-dom'
import dayjs from "dayjs";

function Travel(){
  const [tubeLines, setTubeLines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('')
  useEffect(() => {
    tflRequest.then(response => {
      setTubeLines(response.data);
      setLoading(false);
      let formattedDateTime = dayjs().format('DD/MM/YYYY - HH:mm:ss');
      setLastUpdated(`Last Updated: ${formattedDateTime}`);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });    
  }, []) 

    return(
    <>
      {loading ? ( 
        <div>Loading...</div>
      ) : (
        <>
        <h4>{lastUpdated}</h4>
        <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>Line</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tubeLines.map(line => (
              <tr key={line.id}>
                <td>{line.name}</td>
                <td>{line.lineStatuses[0].statusSeverityDescription}</td>
                <td><Link to={`/travel/${line.id}`}  state={{reason: line.lineStatuses[0].reason, line_name: line.name, last_updated: lastUpdated }}>View More</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </>
      )}
    </>
  );
}

export default Travel;