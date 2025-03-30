// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";

// // Define Data Grid Columns
// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   { field: "name", headerName: "Job Name", width: 200, editable: false },
//   { field: "salary", headerName: "Salary", width: 130, editable: false },
//   { field: "datePosted", headerName: "Date Posted", width: 150, editable: false },
//   { field: "company", headerName: "Company", width: 180, editable: false },
//   { field: "location", headerName: "Location", width: 180, editable: false },
//   { field: "description", headerName: "Description", width: 400, editable: false },
// ];

// // Mock Job Search Results Data
// const rows = [
//   {
//     id: 1,
//     name: "Software Engineer",
//     salary: "$100,000",
//     datePosted: "2024-03-25",
//     company: "Google",
//     location: "New York, NY",
//     description: "Develop and maintain scalable web applications."
//   },
//   {
//     id: 2,
//     name: "Data Analyst",
//     salary: "$85,000",
//     datePosted: "2024-03-20",
//     company: "Amazon",
//     location: "Seattle, WA",
//     description: "Analyze and interpret complex data sets."
//   },
//   {
//     id: 3,
//     name: "UX Designer",
//     salary: "$95,000",
//     datePosted: "2024-03-22",
//     company: "Microsoft",
//     location: "San Francisco, CA",
//     description: "Design user-friendly experiences and interfaces."
//   },
//   {
//     id: 4,
//     name: "Product Manager",
//     salary: "$120,000",
//     datePosted: "2024-03-18",
//     company: "Apple",
//     location: "Cupertino, CA",
//     description: "Oversee product development lifecycle."
//   },
//   {
//     id: 5,
//     name: "Cybersecurity Analyst",
//     salary: "$110,000",
//     datePosted: "2024-03-21",
//     company: "Facebook",
//     location: "Austin, TX",
//     description: "Implement security measures to protect company data."
//   }
// ];

// export default function JobResultsGrid() {
//   return (
//     <Box sx={{ height: 500, width: "100%", padding: "20px" }}>
//       <h2 style={{ textAlign: "center" }}>Job Search Results</h2>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5, 10, 20]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }
