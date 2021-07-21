import React from 'react';

function PageFunction2() {
  const dataDay = '2020-08-10T14:54:52+07:00'
  const monthTH = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
  const quarterTH = ['1','1','1','2','2','2','3','3','3','4','4','4']
  const data = dataDay.split("") // ["2", "0", "2", "0", "-", "0", "8", "-", "1", "0", "T", "1", "4", ":", "5", "4", ":", "5", "2", "+", "0", "7", ":", "0", "0"]
  const year = data[0] + data[1] + data[2] + data[3] // 2020
  const month = data[5] + data[6] // 08
  const day = data[8] + data[9] // 10
  const timeHourMinute = data[11] + data[12] + data[13] + data[14] + data[15] // 14:54
  const yearTH = parseInt(year)+543 // 2563

  const datetimeEN = day + '/' + month + '/' + year + ' ' + timeHourMinute // 10/08/2020 14:54
  const dateTH = day + ' ' + monthTH[month-1] + ' ' + yearTH // 10 สิงหาคม 2563
  const daysMonth = new Date(year, month, 0).getDate() // 31
  const quarter = quarterTH[month-1] // 3
  const timestamp = Number(new Date(dataDay)) / 1000; // 1597046092

  return (
    <div>
      <div className="boxcode">
        <p>{datetimeEN}</p>
        <p>{dateTH} // รูปแบบปฏิทินไทย</p>
        <p>{daysMonth} // จำนวนวันในเดือนนี้</p>
        <p>{quarter} // ไตรมาตรของเดือนนี้</p>
        <p>{timestamp} // Unix timestamp</p>
      </div>
    </div>
  );
}

export default PageFunction2;