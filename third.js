document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "http://localhost:8084/getEmp";
    const tableBody = document.getElementById("tableBody");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(employee => {
                // Create a new table row
                const row = document.createElement("tr");

                row.innerHTML = `
                    <th>${employee.id}</th>
                    <th>${employee.name}</th>
                    <th>${employee.age}</th>
                    <th>${employee.salary}</th>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.log("Error occurred while fetching data: " + error);
        });
});