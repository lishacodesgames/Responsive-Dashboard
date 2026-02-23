Reads.forEach(read => {
   const tr = document.createElement('tr');
   const trContent = `
      <td>${read.book}</td>
      <td>${read.id}</td>
      <td>${read.paymentStatus}</td>
      <td class="${read.status === 'Declined' ? 'danger' :
         read.status === 'Pending' ? 'warning' :
         'primary'}">${read.status}</td>
      <td class="primary">Details</td>
   `;
   tr.innerHTML = trContent;
   document.querySelector('table tbody').appendChild(tr);
});
